import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { StoreEvents } from '~/lib/db';

// Define event handler types
export type SeatUpdatedEvent = { position: string; selected: boolean };
export type FoodUpdatedEvent = { id: string; selected: boolean };
export type GuestUpdatedEvent = { count: number; lastReset: Date };

type SocketEventHandlers = {
  onSeatUpdated?: (data: SeatUpdatedEvent) => void;
  onSeatReset?: () => void;
  onFoodUpdated?: (data: FoodUpdatedEvent) => void;
  onFoodReset?: () => void;
  onGuestUpdated?: (data: GuestUpdatedEvent) => void;
  onGuestReset?: (data: GuestUpdatedEvent) => void;
  onFullReset?: () => void;
};

export const useSocket = (handlers: SocketEventHandlers = {}) => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    const initSocket = async () => {
      // Make sure the socket server is running
      await fetch('/api/socket');
      
      // Connect to the socket
      const socket = io({
        path: '/api/socket',
        addTrailingSlash: false,
      });
      socketRef.current = socket;

      // Connection event handlers
      socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
        setIsConnected(true);
      });

      socket.on('disconnect', () => {
        console.log('Socket disconnected');
        setIsConnected(false);
      });

      socket.on('error', (error) => {
        console.error('Socket error:', error);
      });

      // Event handlers for real-time updates
      if (handlers.onSeatUpdated) {
        socket.on(StoreEvents.SEAT_UPDATED, handlers.onSeatUpdated);
      }

      if (handlers.onSeatReset) {
        socket.on(StoreEvents.SEAT_RESET, handlers.onSeatReset);
      }

      if (handlers.onFoodUpdated) {
        socket.on(StoreEvents.FOOD_UPDATED, handlers.onFoodUpdated);
      }

      if (handlers.onFoodReset) {
        socket.on(StoreEvents.FOOD_RESET, handlers.onFoodReset);
      }

      if (handlers.onGuestUpdated) {
        socket.on(StoreEvents.GUEST_UPDATED, handlers.onGuestUpdated);
      }

      if (handlers.onGuestReset) {
        socket.on(StoreEvents.GUEST_RESET, handlers.onGuestReset);
      }

      if (handlers.onFullReset) {
        socket.on(StoreEvents.FULL_RESET, handlers.onFullReset);
      }
    };

    // Initialize the socket
    initSocket().catch(console.error);

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        console.log('Closing socket connection');
        socketRef.current.disconnect();
      }
    };
  }, [
    handlers.onSeatUpdated,
    handlers.onSeatReset,
    handlers.onFoodUpdated,
    handlers.onFoodReset,
    handlers.onGuestUpdated,
    handlers.onGuestReset,
    handlers.onFullReset
  ]);

  return {
    isConnected,
    socket: socketRef.current
  };
}; 