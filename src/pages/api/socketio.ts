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
        console.log('Broadcasting seat update to clients:', data);
        io.emit('seat-update', data);
      });
      
      // Handle seat reset
      db.events.on(StoreEvents.SEAT_RESET, () => {
        console.log('Broadcasting seat reset to clients');
        io.emit('seat-update', { reset: true });
      });
      
      // Handle food option updates
      db.events.on(StoreEvents.FOOD_UPDATED, (data) => {
        console.log('Broadcasting food update to clients:', data);
        io.emit('food-update', data);
      });
      
      // Handle food reset
      db.events.on(StoreEvents.FOOD_RESET, () => {
        console.log('Broadcasting food reset to clients');
        io.emit('food-update', { reset: true });
      });
      
      // Handle guest count updates
      db.events.on(StoreEvents.GUEST_UPDATED, (data) => {
        console.log('Broadcasting guest update to clients:', data);
        io.emit('guest-update', data);
      });
      
      // Handle guest reset
      db.events.on(StoreEvents.GUEST_RESET, (data) => {
        console.log('Broadcasting guest reset to clients:', data);
        io.emit('guest-update', { ...data, reset: true });
      });
      
      // Handle full reset
      db.events.on(StoreEvents.FULL_RESET, () => {
        console.log('Broadcasting full reset to clients');
        io.emit('full-reset');
      });
      
      // Mark listeners as initialized
      res.socket.server.listenersInitialized = true;
    }
  };
  
  setupEventListeners();
  
  // Respond with success
  res.status(200).json({ success: true });
} 