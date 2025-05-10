import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { StoreEvents } from '~/lib/db';

export type SeatUpdateData = { position: string; selected: boolean };
export type FoodUpdateData = { id: string; selected: boolean };
export type GuestUpdateData = { count: number; lastReset: string };

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectError, setConnectError] = useState<Error | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    const initSocket = async () => {
      try {
        // Make sure the socket server is running
        console.log('Initializing socket connection...');
        const response = await fetch('/api/socketio');
        const data = await response.json();
        console.log('Socket server ready:', data);
        
        // Connect to the socket
        const socket = io({
          path: '/api/socketio',
          transports: ['websocket', 'polling'],
          reconnectionAttempts: 5,
          reconnectionDelay: 1000,
        });
        socketRef.current = socket;

        // Connection event handlers
        socket.on('connect', () => {
          console.log('Socket connected successfully:', socket.id);
          setIsConnected(true);
          setConnectError(null);
        });

        socket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          setConnectError(error);
        });

        socket.on('disconnect', (reason) => {
          console.log('Socket disconnected:', reason);
          setIsConnected(false);
        });

        socket.on('error', (error) => {
          console.error('Socket error:', error);
        });
        
        // Map DB event names to socket.io event names
        socket.on(StoreEvents.SEAT_UPDATED, (data) => {
          console.log('Forwarding seat update to clients:', data);
          socket.emit('seat-update', data);
        });

        socket.on(StoreEvents.FOOD_UPDATED, (data) => {
          console.log('Forwarding food update to clients:', data);
          socket.emit('food-update', data);
        });

        socket.on(StoreEvents.GUEST_UPDATED, (data) => {
          console.log('Forwarding guest update to clients:', data);
          socket.emit('guest-update', data);
        });
      } catch (error) {
        console.error("Failed to initialize socket:", error);
        setConnectError(error instanceof Error ? error : new Error(String(error)));
      }
    };

    // Initialize the socket
    initSocket();

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        console.log('Closing socket connection');
        socketRef.current.disconnect();
      }
    };
  }, []);

  return {
    isConnected,
    connectError,
    socket: socketRef.current
  };
}; 