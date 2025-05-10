/**
 * This file provides a database-independent implementation
 * that works with an in-memory data store.
 */

// In-memory data store
const memoryStore = {
  guestCount: 0,
  lastReset: new Date(),
  seatSelections: new Map<string, boolean>(),
  foodOptions: new Map<string, { id: string; name: string; icon: string; selected: boolean }>()
};

// Initialize with some sample food options
const sampleFoodOptions = [
  { id: "f1", name: "Pasta", icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z", selected: false },
  { id: "f2", name: "Pizza", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z", selected: false },
  { id: "f3", name: "Salad", icon: "M17 10c.1 0 .19.01.28.02L15 3H9L7 9.11c.36.3.89.89 1.08 1.14C8.96 10.94 9.7 11 10 11c.29 0 .55-.05.76-.15l.95-.63c.57-.39 1.37-.39 1.95 0l.56.38c.53.36 1.21.36 1.74 0L17 10zm-3.34 5c-.45 0-.89-.15-1.25-.43l-.56-.37c-.38-.26-.92-.26-1.31 0l-.95.63c-.47.31-1.12.5-1.56.5-.7 0-3.03-.68-3.03-3.33 0-1.05.39-2.03 1.1-2.77L7.18 7h9.64l2 4c.38.02.74.14 1.05.37.12.08.22.16.32.26.73.71 1.05 1.72 1.05 2.77 0 2.64-2.33 3.33-3.03 3.33-.78 0-3.22-.68-3.53-3.32-.08-.74-.23-1.36-.46-1.87-.32-.73-.76-1.19-1.18-1.41l-.45-.22-1.08.55-.01.01c-.32.15-.64.42-.95.79-.29.34-.54.76-.73 1.26-.15.39-.26.83-.33 1.31-.28 1.95-1.89 2.91-2.67 3.22", selected: false },
  { id: "f4", name: "Fish", icon: "M19 12.8c-2.13 0-4.66.96-6.46 2.32l4.95 4.96c.9-.83 1.52-1.95 1.51-3.26v-4.02m-9.82-2.23c.47-.8 1.2-1.57 2.24-2.29-1.58-2.89-3.96-4.74-6.92-5.28 1.12 2.51 2.47 5.1 4.68 7.57M22.1 21.5l-4.93-4.93C13.56 19.44 8.88 22 5 22l3.93-3.94c-1.31-.97-2.13-2.21-2.13-3.76 0-4.27 5.58-8.75 12.21-8.29-1.83 3.56-1.36 8.41.14 9.91 1.77 1.77 11.11 11.11 11.11 11.11l-8.16-5.53z", selected: false },
  { id: "f5", name: "Soup", icon: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z", selected: false },
  { id: "f6", name: "Steak", icon: "M19 5h-5V2h-4v3H5C3.9 5 3 5.9 3 7v9c0 1.1.9 2 2 2h2v3h10v-3h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-7 5c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm7 4H5V7h14v7z", selected: false },
  { id: "f7", name: "Seafood", icon: "M11.24 10.25l1.41-1.41-1.46-1.46c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l1.46 1.46 1.41-1.41-1.47-1.42c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l1.47 1.42 1.41-1.41-2.17-2.19C14.45 3.12 14.14 3 13.8 3h-2.59c-.33 0-.65.13-.89.36L8.09 5.56c-1.59-1.53-3.08-1.4-3.98-.49-.91.91-1.26 2.52.15 4.1-.75.36-1.26 1.12-1.26 2.01 0 .74.36 1.39.92 1.79-.28.26-.52.58-.52 1.03 0 .83.66 1.5 1.5 1.5h9.1c1.5 0 2.7-1.2 2.7-2.7 0-2.21-1.79-4-4-4h-.01c-.31 0-.6.02-.89.05", selected: false },
  { id: "f8", name: "Dessert", icon: "M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24C4.08 6.81 3 8.29 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39l-2.73-5.21c.83.37 1.74.58 2.68.58.95 0 1.88-.21 2.72-.6l-2.67 5.23z", selected: false },
  { id: "f9", name: "Chicken", icon: "M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-1.86.74-3.55 1.94-4.8L5 5.28l1.39-1.39 16.28 16.29-1.4 1.39-3.57-3.57c-1.49.88-3.23 1.4-5.1 1.4zm2.83-7.17L9.17 15C11.39 15 13 13.5 13 13s-1.8-2.83-4.17-2.83L11.17 8c3.07.85 5.16 3.7 5.16 7 0 .85-.15 1.66-.4 2.43l-1.1-1.1z", selected: false }
];

// Initialize sample data
for (const option of sampleFoodOptions) {
  memoryStore.foodOptions.set(option.id, option);
}

// Initialize seat positions
const seatPositions = [
  'top-left', 'top-center', 'top-right', 
  'bottom-left', 'bottom-center', 'bottom-right'
];

// Initialize seat selections
for (const position of seatPositions) {
  memoryStore.seatSelections.set(position, false);
}

// Helper to determine if today is a new day compared to stored date
const isNewDay = (storedDate: Date): boolean => {
  return new Date().toDateString() !== storedDate.toDateString();
};

// Database interface
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
      for (const position of seatPositions) {
        memoryStore.seatSelections.set(position, false);
      }
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