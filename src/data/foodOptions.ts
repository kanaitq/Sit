export interface FoodOption {
  id: string;
  name: string;
  icon: string; // SVG path data
  selected: boolean;
}

// Storage key for localStorage fallback
const STORAGE_KEY = 'food-options';

// Initial food options data - used for seeding the database
export const initialFoodOptions: FoodOption[] = [
  {
    id: "goat",
    name: "Goat",
    icon: "M20 11c0-4.9-4-8.9-8.9-8.9-4.9 0-8.9 4-8.9 8.9 0 3.5 2.1 6.5 5 7.8V20c0 .5.5 1 1 1h6c.5 0 1-.5 1-1v-1.2c2.9-1.3 5-4.3 5-7.8zm-3.5 5.5L14 14v4h-4v-4l-2.5 2.5C4.8 15 3 13 3 11c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2-1.8 4-2.5 5.5zM7 8.5C7 7.1 8.1 6 9.5 6S12 7.1 12 8.5 10.9 11 9.5 11 7 9.9 7 8.5zM14.5 6c1.4 0 2.5 1.1 2.5 2.5S15.9 11 14.5 11 12 9.9 12 8.5 13.1 6 14.5 6z",
    selected: false
  },
  {
    id: "beef",
    name: "Beef",
    icon: "M10.5 2c1.4 0 2.3.9 2.9 1.6.4.5 1.1.4 1.4-.1.3-.5.8-.9 1.5-1.1C17.1 2.1 19 3 19 5c0 1.1-.5 2-1.1 2.5-.7.6-1.6.7-1.9.8-.3.1-.2.5.2.5h1.6c.7 0 1.4-.3 1.8-.8.5-.5.9-1.3.9-2.2 0-1.1-.6-2.1-1.5-2.7C18.1 2.4 17 2 16 2c-1.3 0-2.4.6-3.1 1.5C12.1 2.6 11.3 2 10.5 2 9.7 2 9 2.7 9 3.5c0 .7.5 1.3 1.2 1.5.4.1.8-.3.8-.7s.4-.8.9-.3c.3.3.3.8 0 1.1-.2.2-.6.4-1 .4-.9 0-1.7-.6-1.9-1.4C9 4 9 4 9 4c-.5.5-1.2.8-2 .8-.8 0-1.5-.3-2-.8-.5-.5-.8-1.2-.8-2 0-.8.3-1.5.8-2 .5-.5 1.2-.8 2-.8.7 0 1.4.3 1.9.7.1.1.3.2.4.3.3.2.8.2 1-.2.2-.4.1-.8-.3-1C9.5 2.1 8.8 2 8 2 6.9 2 5.9 2.4 5.1 3.1 4.4 3.9 4 4.9 4 6c0 1.1.4 2.1 1.1 2.9C5.9 9.6 6.9 10 8 10c1.1 0 2.1-.4 2.9-1.1.7-.7 1.1-1.7 1.1-2.9 0-.7-.2-1.4-.5-2 0 0 0 0 0 0 .2-.9 1-1.5 1.9-1.5C14.6 2.5 15.4 3.3 15.4 4.2c0 .9-.7 1.7-1.5 1.8-3.9.3-6.9 3.5-6.9 7.4V19c0 .6.4 1 1 1s1-.4 1-1v-5.5c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5V19c0 .6.4 1 1 1s1-.4 1-1v-5.5c0-3.9-3-7.2-6.9-7.5C11 4.5 9 3.2 9 1.5 9 1.2 9.2 1 9.5 1s.5.2.5.5c0 .4.3.6.7.5.4-.1.8-.3.8-.7 0-.7-.7-1.3-1.5-1.3z",
    selected: false
  },
  {
    id: "chicken",
    name: "Chicken",
    icon: "M18.6 2.3c-1.1-1.1-2.9-1.1-4 0l-8.3 8.3c-.1.1-.1.1-.1.2-.1.3-.3.5-.4.8-.5 1-1.5 1.6-2.5 1.7-.2 0-.4.2-.5.4l-1.5 3c-.2.3-.1.7.1.9.2.2.4.3.7.3.1 0 .2 0 .3-.1l3-1.5c.2-.1.4-.3.4-.5.1-1.1.7-2 1.7-2.5.3-.1.5-.3.8-.4.1 0 .1-.1.2-.1l8.3-8.3c1.1-1.1 1.1-2.9 0-4zm-1.4 2.6c-.4.4-.9.4-1.3 0s-.4-.9 0-1.3.9-.4 1.3 0 .4.9 0 1.3zm-4.9 7.6c-.9.9-1.4 2-1.6 3.2-.1.5-.3 1-.6 1.4-.2.3-.1.7.1.9.1.1.2.1.4.1.2 0 .4-.1.5-.2.5-.4 1-.6 1.5-.7 1.2-.2 2.4-.7 3.3-1.6l4.8-4.8.9 5.5c.1.5.5.8 1 .8h.2c.6-.1.9-.7.8-1.3l-1.2-7.2c-.1-.5-.5-.8-1-.8h-7.2c-.6-.1-1.1.3-1.2.9-.1.6.3 1.1.9 1.2l5.5.9-5.1 4.7z",
    selected: false
  },
  {
    id: "pig",
    name: "Pig",
    icon: "M16.4 4.7C18.5 5.5 20 7.5 20 10c0 3.3-2.7 6-6 6h-8c-2.2 0-4-1.8-4-4 0-1.1.4-2 1.1-2.7.4-.5.9-.8 1.4-1 .1 0 .2 0 .2-.1.2 0 .4.1.4.3.1.2-.1.4-.3.4h-.2c-.8.3-1.5.8-1.9 1.6-.4.5-.7 1.2-.7 1.9 0 1.7 1.3 3 3 3h8c2.8 0 5-2.2 5-5 0-2.1-1.3-3.9-3.2-4.6C14.5 5.7 14.3 5.6 14 5.5c-3.6-.8-7.3 1.3-8.1 4.9 0 .2-.2.4-.4.4H5c-.2 0-.4-.2-.4-.4.6-2.4 2.2-4.2 4.3-5.1C9.5 5 10.2 4.9 11 4.9c1.1 0 2.2.2 3.2.5.7.2 1.5.5 2.2.9V4.8c0-.2.2-.4.4-.4h.2c.2 0 .4.2.4.4v1.7c-.3-.2-.7-.4-1-.6zM9 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z",
    selected: false
  },
  {
    id: "duck",
    name: "Duck",
    icon: "M14 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 6.9c1.8.8 4.1 2.4 4.1 5.1 0 2.2-1.8 4-4 4H4.9c-1.1 0-2-.9-2-2s.9-2 2-2h1.3c-1.3-1.8-1.7-3.4-.5-4.6.5-.5 1.2-.8 2-.8.6 0 1.2.2 1.5.4C10.1 10.1 11.1 10 12 10.9zM9 12c-.8 0-1.5.3-2 .8-.9.9-.4 2 .5 3.2h-.8c-2 0-3.8.9-5 2.3-.1.1-.1.1-.1.2 0 .3.2.5.5.5h7c-1.3-1.3-2-3.1-2-5 0-.7.1-1.3.3-1.9.1-.1.3-.1.4-.1h.2c.6 0 1 .5 1 1V14c0 3.3 2.7 6 6 6 .3 0 .5-.2.5-.5s-.2-.5-.5-.5c-2.8 0-5-2.2-5-5v-1c0-1.1-.9-2-2-2z",
    selected: false
  },
  {
    id: "mystery",
    name: "Mystery",
    icon: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-2.2 0-4 1.8-4 4 0 .5.4.9.9.9.5 0 .9-.4.9-.9 0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 .9-.6 1.7-1.5 2-.7.2-1.2.8-1.2 1.5v1c0 .5.4.9.9.9.5 0 .9-.4.9-.9v-.9c1.7-.5 2.9-2 2.9-3.8 0-2.2-1.8-4-4-4zm0 10c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z",
    selected: false
  },
  {
    id: "vegetable",
    name: "Vegetable",
    icon: "M20 11c0-4.9-4-8.9-8.9-8.9-4.9 0-8.9 4-8.9 8.9 0 4.9 4 8.9 8.9 8.9 4.9 0 8.9-4 8.9-8.9zM16.2 5.2c.5.6.8 1.3 1 2.1-2.6-.3-5.1.1-7.2 1.3-2.5 1.4-4.4 3.5-5.4 6.2-1.9-1.9-2.8-4.5-2.5-7.1.3-2.6 1.9-4.9 4.2-6.2 2.3-1.3 5.1-1.3 7.4 0 1.1.6 2 1.5 2.5v.3zM4.4 16.2c-.5-.6-.8-1.3-1-2.1 2.6.3 5.1-.1 7.2-1.3 2.1-1.2 3.7-3 4.7-5.2 2.3 1.8 3.5 4.7 3.2 7.6-.3 2.9-2.3 5.2-5 6.2-2.8 1-5.7.3-7.8-1.8-.6-.7-1-1.4-1.3-2.3v-1.1z",
    selected: false
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: "M9.8 4.2C7.9 2.7 5.5 2 3 2c-.6 0-1 .4-1 1s.4 1 1 1c2 0 4 .6 5.5 1.7 1.7 1.2 3 2.9 3.8 4.7.1.3.5.5.8.4.3-.1.5-.5.4-.8-.8-2.2-2.4-4.1-4.3-5.6-.1-.1-.3-.2-.4-.2zm11.1 1.1c-.3-.2-.7 0-.9.3L19 7.4c-.2.3 0 .7.3.9.3.2.7 0 .9-.3l1.1-1.7c.2-.4 0-.8-.4-1zm-1.7 1.4c-.3-.2-.7 0-.9.3L17 9l-.9-1.5c-.2-.3-.6-.4-.9-.3-.3.2-.4.6-.3.9L16 10c-.9-.2-1.7-.2-2.6 0-1.5.3-2.9 1.1-4 2.3-1.1 1.2-1.8 2.6-2.1 4.1-.3 1.4-.1 2.8.3 4.2.1.3.5.5.8.4.3-.1.5-.5.4-.8-.4-1.1-.5-2.3-.3-3.5.2-1.2.8-2.3 1.7-3.3.9-.9 2-1.6 3.2-1.9.7-.1 1.4-.1 2 0 .2 0 .4.1.5.1.1 0 .2.1.4.1.1 0 .2.1.4.1.1 0 .3.1.4.2.1.1.3.1.4.2l.4.3c.1.1.2.2.3.3.1.1.2.2.3.4l.2.3c.1.1.1.3.2.4.1.2.1.3.1.5v.1c.1.1.1.3.1.4 0 .2.1.3.1.5 0 .3.1.7.1 1 0 .3.3.6.7.6.4 0 .7-.3.7-.7 0-.1 0-.3-.1-.4 0-.2-.1-.3-.1-.5v-.1c0-.2-.1-.3-.1-.5-.1-.2-.1-.3-.2-.5L19 14c-.1-.2-.2-.3-.3-.5-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.4-.4-.4-.3c-.1-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.2-.1-.1-.3-.1-.4-.2-.1 0-.3-.1-.4-.1-.1 0-.3-.1-.4-.1-.1 0-.3-.1-.4-.1-.3-.1-.5-.1-.8-.1l1.2-1.9c.2-.3 0-.7-.3-.9zm-4.7 3c-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0 .1.1.1.3 0 .4-.1.1-.3.1-.4 0zm-7.8 1.7c-.4-.7-.6-1.5-.6-2.4 0-1.2.4-2.4 1.2-3.3.8-.9 1.9-1.6 3.1-1.8.6-.1 1.3-.1 1.9 0 .1 0 .1 0 .2.1 0 0 .1 0 .1.1.1.4.5.6.9.5.4-.1.6-.5.5-.9-.1-.3-.2-.6-.3-.8-.1-.1-.2-.2-.3-.3-.2-.1-.4-.2-.6-.3-.5-.2-1-.3-1.5-.3-1.5-.1-2.9.5-4 1.5-1.1 1.1-1.7 2.5-1.7 4 0 1.2.3 2.3.9 3.3.2.3.6.4.9.2.2-.2.3-.6.2-.9zm8.9 3.2c.1.1.1.3 0 .4-.1.1-.3.1-.4 0-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0zm3.9-1c-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0 .1.1.1.3 0 .4-.1.1-.3.1-.4 0z",
    selected: false
  }
];

// Helper functions for localStorage fallback
const loadFromLocalStorage = (): FoodOption[] => {
  if (typeof window === 'undefined') {
    return initialFoodOptions;
  }
  
  const savedOptions = localStorage.getItem(STORAGE_KEY);
  if (!savedOptions) {
    return initialFoodOptions;
  }
  
  try {
    return JSON.parse(savedOptions);
  } catch (e) {
    console.error('Error loading food options from localStorage:', e);
    return initialFoodOptions;
  }
};

const saveToLocalStorage = (options: FoodOption[]): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
  } catch (e) {
    console.error('Error saving food options to localStorage:', e);
  }
};

// Cache for food options
let foodOptionsCache: FoodOption[] | null = null;

// Fetch food options from the API with localStorage fallback
export const getFoodOptions = async (): Promise<FoodOption[]> => {
  if (foodOptionsCache) {
    return foodOptionsCache;
  }
  
  try {
    // Try API first
    const response = await fetch('/api/food');
    if (!response.ok) {
      throw new Error('API unavailable');
    }
    
    const data = await response.json();
    foodOptionsCache = data;
    return data;
  } catch (error) {
    // Fallback to localStorage for development
    console.log('Using localStorage fallback for food options');
    const options = loadFromLocalStorage();
    foodOptionsCache = options;
    return options;
  }
};

// Synchronous version for components that can't handle async
export const getFoodOptionsSync = (): FoodOption[] => {
  if (foodOptionsCache) {
    return foodOptionsCache;
  }
  
  const options = loadFromLocalStorage();
  foodOptionsCache = options;
  return options;
};

// Get selected food options
export const getSelectedOptions = async (): Promise<FoodOption[]> => {
  try {
    const options = await getFoodOptions();
    return options.filter(option => option.selected);
  } catch (error) {
    // Fallback
    const options = getFoodOptionsSync();
    return options.filter(option => option.selected);
  }
};

// Get available (unselected) food options
export const getAvailableOptions = async (): Promise<FoodOption[]> => {
  try {
    const options = await getFoodOptions();
    return options.filter(option => !option.selected);
  } catch (error) {
    // Fallback
    const options = getFoodOptionsSync();
    return options.filter(option => !option.selected);
  }
};

// Toggle a food option selection
export const toggleOptionSelection = async (id: string): Promise<FoodOption[]> => {
  try {
    // Get current options to find the one to toggle
    const options = await getFoodOptions();
    const option = options.find(o => o.id === id);
    
    if (!option) {
      throw new Error(`Food option with ID ${id} not found`);
    }
    
    try {
      // Try API first
      const response = await fetch('/api/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          selected: !option.selected,
        }),
      });
      
      if (!response.ok) {
        throw new Error('API unavailable');
      }
      
      // Update the cache
      foodOptionsCache = options.map(o => 
        o.id === id ? { ...o, selected: !option.selected } : o
      );
      
      return foodOptionsCache;
    } catch (apiError) {
      // Fallback to localStorage for development
      console.log('Using localStorage fallback for toggling food option');
      const updatedOptions = options.map(o => 
        o.id === id ? { ...o, selected: !o.selected } : o
      );
      
      foodOptionsCache = updatedOptions;
      saveToLocalStorage(updatedOptions);
      return updatedOptions;
    }
  } catch (error) {
    console.error('Error toggling food option:', error);
    return getFoodOptionsSync(); // Return current state
  }
};

// Clear all food selections
export const clearAllFoodSelections = async (): Promise<FoodOption[]> => {
  try {
    // Try API first
    const response = await fetch('/api/food/reset', {
      method: 'PUT',
    });
    
    if (!response.ok) {
      throw new Error('API unavailable');
    }
    
    // Update the cache
    if (foodOptionsCache) {
      foodOptionsCache = foodOptionsCache.map(option => ({ ...option, selected: false }));
    }
    
    // Refetch to ensure we have the latest data
    return await getFoodOptions();
  } catch (error) {
    // Fallback to localStorage for development
    console.log('Using localStorage fallback for clearing food selections');
    const options = getFoodOptionsSync();
    const updatedOptions = options.map(option => ({ ...option, selected: false }));
    
    foodOptionsCache = updatedOptions;
    saveToLocalStorage(updatedOptions);
    return updatedOptions;
  }
}; 