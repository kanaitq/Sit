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

// Create the context
const RealTimeContext = createContext<RealTimeContextType | undefined>(undefined);

// Event handler registrations
type HandlerRegistry<T> = Set<(data: T) => void>;

export const RealTimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'disconnected'>('connecting');
  
  // Create handler registries
  const seatUpdateHandlers = React.useRef<HandlerRegistry<SeatUpdatedEvent>>(new Set());
  const foodUpdateHandlers = React.useRef<HandlerRegistry<FoodUpdatedEvent>>(new Set());
  const guestUpdateHandlers = React.useRef<HandlerRegistry<GuestUpdatedEvent>>(new Set());
  const resetHandlers = React.useRef<HandlerRegistry<void>>(new Set());
  
  // Socket event handlers
  const handleSeatUpdated = useCallback((data: SeatUpdatedEvent) => {
    console.log('Seat updated via socket:', data);
    setLastUpdate(new Date());
    seatUpdateHandlers.current.forEach(handler => handler(data));
  }, []);
  
  const handleSeatReset = useCallback(() => {
    console.log('Seats reset via socket');
    setLastUpdate(new Date());
    resetHandlers.current.forEach(handler => handler());
  }, []);
  
  const handleFoodUpdated = useCallback((data: FoodUpdatedEvent) => {
    console.log('Food updated via socket:', data);
    setLastUpdate(new Date());
    foodUpdateHandlers.current.forEach(handler => handler(data));
  }, []);
  
  const handleFoodReset = useCallback(() => {
    console.log('Food reset via socket');
    setLastUpdate(new Date());
    resetHandlers.current.forEach(handler => handler());
  }, []);
  
  const handleGuestUpdated = useCallback((data: GuestUpdatedEvent) => {
    console.log('Guest count updated via socket:', data);
    setLastUpdate(new Date());
    guestUpdateHandlers.current.forEach(handler => handler(data));
  }, []);
  
  const handleGuestReset = useCallback((data: GuestUpdatedEvent) => {
    console.log('Guest count reset via socket:', data);
    setLastUpdate(new Date());
    resetHandlers.current.forEach(handler => handler());
  }, []);
  
  const handleFullReset = useCallback(() => {
    console.log('Full reset via socket');
    setLastUpdate(new Date());
    resetHandlers.current.forEach(handler => handler());
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
  
  // Handler registration functions
  const registerSeatUpdateHandler = useCallback((handler: (data: SeatUpdatedEvent) => void) => {
    seatUpdateHandlers.current.add(handler);
    return () => {
      seatUpdateHandlers.current.delete(handler);
    };
  }, []);
  
  const registerFoodUpdateHandler = useCallback((handler: (data: FoodUpdatedEvent) => void) => {
    foodUpdateHandlers.current.add(handler);
    return () => {
      foodUpdateHandlers.current.delete(handler);
    };
  }, []);
  
  const registerGuestUpdateHandler = useCallback((handler: (data: GuestUpdatedEvent) => void) => {
    guestUpdateHandlers.current.add(handler);
    return () => {
      guestUpdateHandlers.current.delete(handler);
    };
  }, []);
  
  const registerResetHandler = useCallback((handler: () => void) => {
    resetHandlers.current.add(handler);
    return () => {
      resetHandlers.current.delete(handler);
    };
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

// Custom hook to use the real-time context
export const useRealTime = () => {
  const context = useContext(RealTimeContext);
  if (context === undefined) {
    throw new Error('useRealTime must be used within a RealTimeProvider');
  }
  return context;
}; 