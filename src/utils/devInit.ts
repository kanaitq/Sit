// Development initialization utility
import { initialFoodOptions } from '~/data/foodOptions';

// Initialize localStorage with default values for development
export const initDevEnvironment = () => {
  if (typeof window === 'undefined') {
    return;
  }
  
  console.log('Initializing development environment...');
  
  // Initialize food options if not already present
  if (!localStorage.getItem('food-options')) {
    localStorage.setItem('food-options', JSON.stringify(initialFoodOptions));
    console.log('Initialized food options in localStorage');
  }
  
  // Initialize last reset date if not already present
  if (!localStorage.getItem('last-reset-date')) {
    const today = new Date().toISOString().split('T')[0]!;
    localStorage.setItem('last-reset-date', today);
    console.log('Initialized last reset date in localStorage');
  }
  
  // Initialize seat selections if not already present
  const seatPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  seatPositions.forEach(position => {
    const key = `seat-${position}`;
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, 'false');
    }
  });
  
  console.log('Development environment initialized');
}; 