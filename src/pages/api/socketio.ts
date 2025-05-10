import { Server as SocketIOServer } from 'socket.io';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db, StoreEvents } from '~/lib/db';

export default function handler(req: NextApiRequest, res: any) {
  // Check if socket.io server is already running
  if (res.socket.server.io) {
    console.log('Socket.io server already running');
    res.end();
    return;
  }

  console.log('Setting up Socket.io server...');
  // Create a new Socket.io server attached to the existing server
  const io = new SocketIOServer(res.socket.server, {
    path: '/api/socketio',
    addTrailingSlash: false,
  });
  
  // Store the Socket.io server instance
  res.socket.server.io = io;

  // Handle client connections
  io.on('connection', (socket) => {
    console.log('New client connected', socket.id);
    
    // Send initial data to the client
    socket.emit('initialData', {
      message: 'Connected to real-time server'
    });
    
    // Handle client disconnect
    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });

  // Register event listeners only once
  const setupEventListeners = () => {
    // Only register listeners if they don't exist yet
    if (!res.socket.server.listenersInitialized) {
      // Handle seat selection updates
      db.events.on(StoreEvents.SEAT_UPDATED, (data) => {
        io.emit(StoreEvents.SEAT_UPDATED, data);
      });
      
      // Handle seat reset
      db.events.on(StoreEvents.SEAT_RESET, () => {
        io.emit(StoreEvents.SEAT_RESET);
      });
      
      // Handle food option updates
      db.events.on(StoreEvents.FOOD_UPDATED, (data) => {
        io.emit(StoreEvents.FOOD_UPDATED, data);
      });
      
      // Handle food reset
      db.events.on(StoreEvents.FOOD_RESET, () => {
        io.emit(StoreEvents.FOOD_RESET);
      });
      
      // Handle guest count updates
      db.events.on(StoreEvents.GUEST_UPDATED, (data) => {
        io.emit(StoreEvents.GUEST_UPDATED, data);
      });
      
      // Handle guest reset
      db.events.on(StoreEvents.GUEST_RESET, (data) => {
        io.emit(StoreEvents.GUEST_RESET, data);
      });
      
      // Handle full reset
      db.events.on(StoreEvents.FULL_RESET, () => {
        io.emit(StoreEvents.FULL_RESET);
      });
      
      // Mark listeners as initialized
      res.socket.server.listenersInitialized = true;
    }
  };
  
  setupEventListeners();
  
  // Respond with success
  res.status(200).json({ success: true });
} 