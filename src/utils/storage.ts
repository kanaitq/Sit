// API-based storage wrapper with localStorage fallback for development
export const storage = {
  // Cache timeout in milliseconds (5 minutes)
  CACHE_TIMEOUT: 5 * 60 * 1000,
  
  // Cache timestamps and data
  cache: {
    timestamps: {} as Record<string, number>,
    data: {} as Record<string, any>
  },
  
  // Helper for localStorage with error handling
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(`Error reading from localStorage (key: ${key}):`, error);
      return null;
    }
  },
  
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error writing to localStorage (key: ${key}):`, error);
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        try {
          // Clear old items that aren't critical
          const nonCriticalKeys = ['last-viewed', 'ui-preferences'];
          nonCriticalKeys.forEach(k => localStorage.removeItem(k));
          localStorage.setItem(key, value);
        } catch (retryError) {
          console.error('Failed to recover from storage quota error');
        }
      }
    }
  },
  
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage (key: ${key}):`, error);
    }
  },

  // Retry API calls with exponential backoff (optimized)
  retryFetch: async (url: string, options?: RequestInit, retries = 2): Promise<Response> => {
    let delay = 300;
    let attempts = 0;
    
    while (true) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        return response;
      } catch (error) {
        attempts++;
        if (attempts > retries) throw error;
        
        console.log(`Retrying API call (${attempts}/${retries})...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  },

  // Cache management
  getCached: (key: string, maxAge?: number): any => {
    const now = Date.now();
    const timestamp = storage.cache.timestamps[key];
    const timeout = maxAge || storage.CACHE_TIMEOUT;
    
    if (timestamp && (now - timestamp < timeout)) {
      return storage.cache.data[key];
    }
    
    return null;
  },
  
  setCached: (key: string, data: any): void => {
    storage.cache.timestamps[key] = Date.now();
    storage.cache.data[key] = data;
  },
  
  invalidateCache: (key: string): void => {
    delete storage.cache.timestamps[key];
    delete storage.cache.data[key];
  },

  // Seat operations
  isSeatSelected: async (seatId: string): Promise<boolean> => {
    // Check memory cache first
    const cacheKey = `seat-${seatId}`;
    const cached = storage.getCached(cacheKey);
    if (cached !== null) return cached;
    
    // Then check localStorage
    const localValue = storage.getItem(cacheKey);
    if (localValue !== null) {
      const selected = localValue === 'true';
      storage.setCached(cacheKey, selected);
      return selected;
    }
    
    // Finally try API
    try {
      const response = await storage.retryFetch('/api/seats');
      const seats = await response.json();
      const seat = seats.find((s: any) => s.position === seatId);
      
      // Update cache and localStorage
      const selected = seat ? seat.selected : false;
      storage.setCached(cacheKey, selected);
      storage.setItem(cacheKey, String(selected));
      
      return selected;
    } catch (error) {
      console.log('API unavailable for seat selection');
      return false;
    }
  },
  
  isSeatSelectedSync: (seatId: string): boolean => {
    if (typeof window === 'undefined') return false;
    
    // Check memory cache first
    const cacheKey = `seat-${seatId}`;
    const cached = storage.getCached(cacheKey);
    if (cached !== null) return cached;
    
    // Then check localStorage
    return storage.getItem(cacheKey) === 'true';
  },
  
  toggleSeatSelection: async (seatId: string, selected: boolean): Promise<boolean> => {
    const cacheKey = `seat-${seatId}`;
    
    // Update localStorage and cache immediately for responsive UI
    storage.setItem(cacheKey, String(selected));
    storage.setCached(cacheKey, selected);
    
    try {
      // Then try API
      const response = await storage.retryFetch('/api/seats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ position: seatId, selected }),
      });
      
      const result = await response.json();
      return result.selected;
    } catch (error) {
      console.log('API unavailable for toggling seat');
      return selected;
    }
  },
  
  clearAllSeatSelections: async (positions: string[]): Promise<void> => {
    // Update localStorage and cache immediately
    positions.forEach(position => {
      const key = `seat-${position}`;
      storage.setItem(key, 'false');
      storage.setCached(key, false);
    });
    
    try {
      // Then try API
      await storage.retryFetch('/api/seats', {
        method: 'PUT',
      });
    } catch (error) {
      console.log('API unavailable for clearing seats');
    }
  },
  
  getSelectedSeatsCount: async (positions: string[]): Promise<number> => {
    // Try memory cache first
    let allCached = true;
    let count = 0;
    
    for (const position of positions) {
      const key = `seat-${position}`;
      const cached = storage.getCached(key);
      
      if (cached === null) {
        allCached = false;
        break;
      }
      
      if (cached === true) count++;
    }
    
    if (allCached) return count;
    
    // Try localStorage next
    let allInLocalStorage = true;
    count = 0;
    
    for (const position of positions) {
      const key = `seat-${position}`;
      const value = storage.getItem(key);
      
      if (value === null) {
        allInLocalStorage = false;
        break;
      }
      
      if (value === 'true') count++;
      storage.setCached(key, value === 'true');
    }
    
    if (allInLocalStorage) return count;
    
    // Finally try API
    try {
      const response = await storage.retryFetch('/api/seats');
      const seats = await response.json();
      
      // Update cache
      seats.forEach((seat: any) => {
        const key = `seat-${seat.position}`;
        storage.setItem(key, String(seat.selected));
        storage.setCached(key, seat.selected);
      });
      
      return seats.filter((s: any) => s.selected).length;
    } catch (error) {
      console.log('API unavailable for seat count');
      
      // Fall back to partial localStorage data
      count = 0;
      positions.forEach(position => {
        if (storage.getItem(`seat-${position}`) === 'true') {
          count++;
        }
      });
      return count;
    }
  },
  
  getSelectedSeatsCountSync: (positions: string[]): number => {
    if (typeof window === 'undefined') return 0;
    
    let count = 0;
    positions.forEach(position => {
      // Check memory cache first
      const key = `seat-${position}`;
      const cached = storage.getCached(key);
      
      if (cached !== null) {
        if (cached === true) count++;
      } else if (storage.getItem(key) === 'true') {
        count++;
      }
    });
    return count;
  },

  // Helper for creating events with fallback for older browsers
  createEvent: (eventName: string): Event => {
    if (typeof window === 'undefined') return new Event(eventName);
    
    // Check if Event constructor is supported
    if (typeof Event === 'function') {
      return new Event(eventName);
    } else {
      // For IE and older browsers
      const event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      return event;
    }
  },

  // Add these functions for handling additional guests
  setAdditionalGuestCount: async (count: number): Promise<void> => {
    const cacheKey = 'additionalGuestCount';
    
    // Validate input
    if (typeof count !== 'number' || count < 0) {
      throw new Error('Invalid guest count: must be a non-negative number');
    }
    
    // Update localStorage and cache immediately for responsive UI
    storage.setItem(cacheKey, count.toString());
    storage.setCached(cacheKey, count);
    
    // Dispatch event so other components can update
    if (typeof window !== 'undefined') {
      try {
        window.dispatchEvent(storage.createEvent('guestCountChanged'));
      } catch (error) {
        console.warn('Could not dispatch event, falling back to polling', error);
      }
    }
    
    try {
      // Then try API
      await storage.retryFetch('/api/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count }),
      });
    } catch (error) {
      console.log('API unavailable for setting guest count');
    }
  },

  getAdditionalGuestCount: async (): Promise<number> => {
    // Check memory cache first
    const cacheKey = 'additionalGuestCount';
    const cached = storage.getCached(cacheKey);
    if (cached !== null) return cached;
    
    // Then check localStorage
    const localValue = storage.getItem(cacheKey);
    if (localValue !== null) {
      const count = parseInt(localValue, 10);
      storage.setCached(cacheKey, count);
      return count;
    }
    
    // Finally try API
    try {
      const response = await storage.retryFetch('/api/guests');
      const data = await response.json();
      
      // Update cache and localStorage
      const count = data.count || 0;
      storage.setCached(cacheKey, count);
      storage.setItem(cacheKey, count.toString());
      
      return count;
    } catch (error) {
      console.log('API unavailable for guest count');
      return 0;
    }
  },
  
  getAdditionalGuestCountSync: (): number => {
    if (typeof window === 'undefined') return 0;
    
    // Check memory cache first
    const cacheKey = 'additionalGuestCount';
    const cached = storage.getCached(cacheKey);
    if (cached !== null) return cached;
    
    // Then check localStorage
    const localValue = storage.getItem(cacheKey);
    return localValue ? parseInt(localValue, 10) : 0;
  },

  // Add reset functionality for additional guests
  resetAdditionalGuestCount: async (): Promise<void> => {
    const cacheKey = 'additionalGuestCount';
    
    // Update localStorage and cache immediately
    storage.setItem(cacheKey, '0');
    storage.setCached(cacheKey, 0);
    
    // Dispatch event for UI updates
    if (typeof window !== 'undefined') {
      try {
        window.dispatchEvent(storage.createEvent('guestCountChanged'));
      } catch (error) {
        console.warn('Could not dispatch event, falling back to polling', error);
      }
    }
    
    try {
      // Then try API
      await storage.retryFetch('/api/guests/reset', { method: 'PUT' });
    } catch (error) {
      console.log('API unavailable for resetting guest count');
    }
  }
}; 