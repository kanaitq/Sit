import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSocket } from '~/hooks/useSocket';
import type { SeatUpdatedEvent, FoodUpdatedEvent, GuestUpdatedEvent } from '~/hooks/useSocket';

// Define the context types
type RealTimeContextType = {
  isConnected: boolean;
  lastUpdate: Date | null;
  connectionStatus: 'connected' | 'connecting' | 'disconnected';
  // Notification handlers for components to register
  registerSeatUpdateHandler: (handler: (data: SeatUpdatedEvent) => void) => () => void;
  registerFoodUpdateHandler: (handler: (data: FoodUpdatedEvent) => void) => () => void;
  registerGuestUpdateHandler: (handler: (data: GuestUpdatedEvent) => void) => () => void;
  registerResetHandler: (handler: () => void) => () => void;
};

// Create the context with default values
const defaultContextValue: RealTimeContextType = {
  isConnected: false,
  lastUpdate: null,
  connectionStatus: 'connecting',
  registerSeatUpdateHandler: () => () => {},
  registerFoodUpdateHandler: () => () => {},
  registerGuestUpdateHandler: () => () => {},
  registerResetHandler: () => () => {},
};

// Create the context
const RealTimeContext = createContext<RealTimeContextType>(defaultContextValue);

// Event handler registrations
type HandlerRegistry<T> = Set<(data: T) => void>;

export const RealTimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'disconnected'>('connecting');
  const [error, setError] = useState<Error | null>(null);
  
  // Create handler registries
  const seatUpdateHandlers = React.useRef<HandlerRegistry<SeatUpdatedEvent>>(new Set());
  const foodUpdateHandlers = React.useRef<HandlerRegistry<FoodUpdatedEvent>>(new Set());
  const guestUpdateHandlers = React.useRef<HandlerRegistry<GuestUpdatedEvent>>(new Set());
  const resetHandlers = React.useRef<HandlerRegistry<void>>(new Set());
  
  // Socket event handlers with error handling
  const handleSeatUpdated = useCallback((data: SeatUpdatedEvent) => {
    try {
      console.log('Seat updated via socket:', data);
      setLastUpdate(new Date());
      seatUpdateHandlers.current.forEach(handler => handler(data));
    } catch (err) {
      console.error('Error handling seat update:', err);
    }
  }, []);
  
  const handleSeatReset = useCallback(() => {
    try {
      console.log('Seats reset via socket');
      setLastUpdate(new Date());
      resetHandlers.current.forEach(handler => handler());
    } catch (err) {
      console.error('Error handling seat reset:', err);
    }
  }, []);
  
  const handleFoodUpdated = useCallback((data: FoodUpdatedEvent) => {
    try {
      console.log('Food updated via socket:', data);
      setLastUpdate(new Date());
      foodUpdateHandlers.current.forEach(handler => handler(data));
    } catch (err) {
      console.error('Error handling food update:', err);
    }
  }, []);
  
  const handleFoodReset = useCallback(() => {
    try {
      console.log('Food reset via socket');
      setLastUpdate(new Date());
      resetHandlers.current.forEach(handler => handler());
    } catch (err) {
      console.error('Error handling food reset:', err);
    }
  }, []);
  
  const handleGuestUpdated = useCallback((data: GuestUpdatedEvent) => {
    try {
      console.log('Guest count updated via socket:', data);
      setLastUpdate(new Date());
      guestUpdateHandlers.current.forEach(handler => handler(data));
    } catch (err) {
      console.error('Error handling guest update:', err);
    }
  }, []);
  
  const handleGuestReset = useCallback((data: GuestUpdatedEvent) => {
    try {
      console.log('Guest count reset via socket:', data);
      setLastUpdate(new Date());
      resetHandlers.current.forEach(handler => handler());
    } catch (err) {
      console.error('Error handling guest reset:', err);
    }
  }, []);
  
  const handleFullReset = useCallback(() => {
    try {
      console.log('Full reset via socket');
      setLastUpdate(new Date());
      resetHandlers.current.forEach(handler => handler());
    } catch (err) {
      console.error('Error handling full reset:', err);
    }
  }, []);
  
  // Initialize socket with all our handlers
  const { isConnected } = useSocket({
    onSeatUpdated: handleSeatUpdated,
    onSeatReset: handleSeatReset,
    onFoodUpdated: handleFoodUpdated,
    onFoodReset: handleFoodReset,
    onGuestUpdated: handleGuestUpdated,
    onGuestReset: handleGuestReset,
    onFullReset: handleFullReset
  });
  
  // Update connection status based on socket connection
  useEffect(() => {
    setConnectionStatus(isConnected ? 'connected' : 'disconnected');
  }, [isConnected]);
  
  // Handler registration functions with error handling
  const registerSeatUpdateHandler = useCallback((handler: (data: SeatUpdatedEvent) => void) => {
    try {
      seatUpdateHandlers.current.add(handler);
      return () => {
        seatUpdateHandlers.current.delete(handler);
      };
    } catch (err) {
      console.error('Error registering seat update handler:', err);
      return () => {};
    }
  }, []);
  
  const registerFoodUpdateHandler = useCallback((handler: (data: FoodUpdatedEvent) => void) => {
    try {
      foodUpdateHandlers.current.add(handler);
      return () => {
        foodUpdateHandlers.current.delete(handler);
      };
    } catch (err) {
      console.error('Error registering food update handler:', err);
      return () => {};
    }
  }, []);
  
  const registerGuestUpdateHandler = useCallback((handler: (data: GuestUpdatedEvent) => void) => {
    try {
      guestUpdateHandlers.current.add(handler);
      return () => {
        guestUpdateHandlers.current.delete(handler);
      };
    } catch (err) {
      console.error('Error registering guest update handler:', err);
      return () => {};
    }
  }, []);
  
  const registerResetHandler = useCallback((handler: () => void) => {
    try {
      resetHandlers.current.add(handler);
      return () => {
        resetHandlers.current.delete(handler);
      };
    } catch (err) {
      console.error('Error registering reset handler:', err);
      return () => {};
    }
  }, []);
  
  // Create context value
  const contextValue: RealTimeContextType = {
    isConnected,
    lastUpdate,
    connectionStatus,
    registerSeatUpdateHandler,
    registerFoodUpdateHandler,
    registerGuestUpdateHandler,
    registerResetHandler
  };
  
  return (
    <RealTimeContext.Provider value={contextValue}>
      {children}
    </RealTimeContext.Provider>
  );
};

// Custom hook to use the real-time context with error handling
export const useRealTime = () => {
  try {
    const context = useContext(RealTimeContext);
    return context;
  } catch (error) {
    console.error('Error using RealTime context:', error);
    return defaultContextValue;
  }
}; 