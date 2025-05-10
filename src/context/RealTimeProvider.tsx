'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useSocket } from '~/hooks/useSocket';

export interface SeatUpdateData {
  position: string;
  selected: boolean;
}

export interface FoodUpdateData {
  id: string;
  selected: boolean;
}

export interface GuestUpdateData {
  count: number;
  lastReset: string;
}

type SeatUpdateHandler = (data: SeatUpdateData) => void;
type FoodUpdateHandler = (data: FoodUpdateData) => void;
type GuestUpdateHandler = (data: GuestUpdateData) => void;

interface RealTimeContextType {
  isConnected: boolean;
  connectionError: Error | null;
  registerSeatUpdateHandler: (handler: SeatUpdateHandler) => () => void;
  registerFoodUpdateHandler: (handler: FoodUpdateHandler) => () => void;
  registerGuestUpdateHandler: (handler: GuestUpdateHandler) => () => void;
}

const RealTimeContext = createContext<RealTimeContextType>({
  isConnected: false,
  connectionError: null,
  registerSeatUpdateHandler: () => () => {},
  registerFoodUpdateHandler: () => () => {},
  registerGuestUpdateHandler: () => () => {},
});

export const useRealTime = () => useContext(RealTimeContext);

export const RealTimeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<Error | null>(null);
  const [seatHandlers, setSeatHandlers] = useState<SeatUpdateHandler[]>([]);
  const [foodHandlers, setFoodHandlers] = useState<FoodUpdateHandler[]>([]);
  const [guestHandlers, setGuestHandlers] = useState<GuestUpdateHandler[]>([]);

  // Initialize socket using our custom hook
  const { socket, connectError } = useSocket();

  // Socket connection effect
  useEffect(() => {
    if (!socket) return;

    const onConnect = () => {
      console.log('Socket.io connected');
      setIsConnected(true);
      setConnectionError(null);
    };

    const onDisconnect = () => {
      console.log('Socket.io disconnected');
      setIsConnected(false);
    };

    const onConnectError = (err: Error) => {
      console.error('Socket.io connection error:', err);
      setConnectionError(err);
      setIsConnected(false);
    };

    // Set up event listeners
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('connect_error', onConnectError);

    // Socket event handlers
    socket.on('seat-update', (data: SeatUpdateData) => {
      console.log('Received seat update:', data);
      seatHandlers.forEach(handler => {
        try {
          handler(data);
        } catch (err) {
          console.error('Error in seat update handler:', err);
        }
      });
    });

    socket.on('food-update', (data: FoodUpdateData) => {
      console.log('Received food update:', data);
      foodHandlers.forEach(handler => {
        try {
          handler(data);
        } catch (err) {
          console.error('Error in food update handler:', err);
        }
      });
    });

    socket.on('guest-update', (data: GuestUpdateData) => {
      console.log('Received guest update:', data);
      guestHandlers.forEach(handler => {
        try {
          handler(data);
        } catch (err) {
          console.error('Error in guest update handler:', err);
        }
      });
    });

    // Clean up
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('connect_error', onConnectError);
      socket.off('seat-update');
      socket.off('food-update');
      socket.off('guest-update');
    };
  }, [socket, seatHandlers, foodHandlers, guestHandlers]);

  // Set initial connection error from hook
  useEffect(() => {
    if (connectError) {
      setConnectionError(connectError);
    }
  }, [connectError]);

  // Register handlers
  const registerSeatUpdateHandler = useCallback((handler: SeatUpdateHandler) => {
    setSeatHandlers(prev => [...prev, handler]);
    return () => {
      setSeatHandlers(prev => prev.filter(h => h !== handler));
    };
  }, []);

  const registerFoodUpdateHandler = useCallback((handler: FoodUpdateHandler) => {
    setFoodHandlers(prev => [...prev, handler]);
    return () => {
      setFoodHandlers(prev => prev.filter(h => h !== handler));
    };
  }, []);

  const registerGuestUpdateHandler = useCallback((handler: GuestUpdateHandler) => {
    setGuestHandlers(prev => [...prev, handler]);
    return () => {
      setGuestHandlers(prev => prev.filter(h => h !== handler));
    };
  }, []);

  return (
    <RealTimeContext.Provider value={{
      isConnected,
      connectionError,
      registerSeatUpdateHandler,
      registerFoodUpdateHandler,
      registerGuestUpdateHandler
    }}>
      {children}
    </RealTimeContext.Provider>
  );
};

export default RealTimeProvider; 