import type { NextApiRequest, NextApiResponse } from 'next';
import { Server as SocketIOServer } from 'socket.io';
import type { Socket as SocketIOSocket } from 'socket.io';
import type { Server as HTTPServer } from 'http';
import type { Server as HTTPSServer } from 'https';
import { db, StoreEvents } from '~/lib/db';

type ServerType = HTTPServer | HTTPSServer;
type SocketIONextApiResponse = NextApiResponse & {
  socket: {
    server: ServerType & {
      io?: SocketIOServer;
    };
  };
};

export default function handler(req: NextApiRequest, res: SocketIONextApiResponse) {
  if (!res.socket.server.io) {
    console.log('Setting up Socket.io server...');
    
    // Create a new Socket.io server
    const io = new SocketIOServer(res.socket.server);
    res.socket.server.io = io;
    
    // Handle client connections
    io.on('connection', (socket: SocketIOSocket) => {
      console.log('New client connected', socket.id);
      
      // Send initial data to the client
      socket.emit('initialData', {
        message: 'Connected to real-time server'
      });
      
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
      
      // Handle client disconnect
      socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
      });
    });
  }
  
  res.status(200).json({ message: 'Socket.io server is running' });
} 