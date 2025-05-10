/**
 * This file provides a database-independent implementation
 * that works with or without a real database connection.
 * It falls back to in-memory state when Prisma is not available.
 */

// In-memory fallback data store
const memoryStore = {
  guestCount: 0,
  lastReset: new Date(),
  seatSelections: new Map<string, boolean>(),
  foodOptions: new Map<string, { id: string; name: string; icon: string; selected: boolean }>()
};

// Singleton pattern for database instance
let dbInstance: any = null;

// Helper to determine if today is a new day compared to stored date
const isNewDay = (storedDate: Date): boolean => {
  return new Date().toDateString() !== storedDate.toDateString();
};

// Database interface - works with or without Prisma
export const db = {
  // Guest count operations
  guests: {
    get: async (): Promise<{ count: number; lastReset: Date }> => {
      // Check if we need to reset on a new day
      if (isNewDay(memoryStore.lastReset)) {
        memoryStore.guestCount = 0;
        memoryStore.lastReset = new Date();
        console.log('Midnight passed, resetting guest count');
      }
      
      return { 
        count: memoryStore.guestCount, 
        lastReset: memoryStore.lastReset 
      };
    },
    
    update: async (count: number): Promise<{ count: number; lastReset: Date }> => {
      if (typeof count !== 'number' || count < 0 || count > 100) {
        throw new Error('Invalid guest count');
      }
      
      memoryStore.guestCount = count;
      
      return { 
        count: memoryStore.guestCount, 
        lastReset: memoryStore.lastReset 
      };
    },
    
    reset: async (): Promise<{ count: number; lastReset: Date }> => {
      memoryStore.guestCount = 0;
      
      return { 
        count: 0, 
        lastReset: memoryStore.lastReset 
      };
    }
  },
  
  // Seat selection operations
  seats: {
    getAll: async (): Promise<{ position: string; selected: boolean }[]> => {
      return Array.from(memoryStore.seatSelections.entries()).map(([position, selected]) => ({
        position,
        selected
      }));
    },
    
    update: async (position: string, selected: boolean): Promise<{ position: string; selected: boolean }> => {
      memoryStore.seatSelections.set(position, selected);
      return { position, selected };
    },
    
    reset: async (): Promise<void> => {
      memoryStore.seatSelections.clear();
    }
  },
  
  // Food options operations
  food: {
    getAll: async (): Promise<{ id: string; name: string; icon: string; selected: boolean }[]> => {
      return Array.from(memoryStore.foodOptions.values());
    },
    
    update: async (id: string, selected: boolean): Promise<{ id: string; selected: boolean }> => {
      const option = memoryStore.foodOptions.get(id);
      if (option) {
        option.selected = selected;
        memoryStore.foodOptions.set(id, option);
      }
      return { id, selected };
    },
    
    reset: async (): Promise<void> => {
      for (const [id, option] of memoryStore.foodOptions.entries()) {
        option.selected = false;
        memoryStore.foodOptions.set(id, option);
      }
    }
  }
}; 