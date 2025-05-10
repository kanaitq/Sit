'use client';

import { useState, useEffect } from 'react';
import type { GuestCounterProps } from './types';
import { storage } from '~/utils/storage';
import { useRealTime } from '~/context/RealTimeProvider';

const GuestCounter = ({ maxGuests = 10, defaultValue = 0 }: GuestCounterProps) => {
  const [guestCount, setGuestCount] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Connect to real-time updates
  const { registerGuestUpdateHandler } = useRealTime();
  
  // Load initial value from storage on mount
  useEffect(() => {
    const fetchInitialCount = async () => {
      try {
        setIsLoading(true);
        // Use the updated async method
        const storedCount = await storage.getAdditionalGuestCount();
        setGuestCount(storedCount);
      } catch (error) {
        console.error('Error loading guest count:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchInitialCount();
    
    // Listen for changes from other components/tabs
    const handleStorageChange = async () => {
      const count = await storage.getAdditionalGuestCount();
      setGuestCount(count);
    };
    
    window.addEventListener('guestCountChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('guestCountChanged', handleStorageChange);
    };
  }, []);
  
  // Register for real-time updates
  useEffect(() => {
    // Handle real-time guest updates from other clients
    const unregister = registerGuestUpdateHandler((data) => {
      console.log(`Real-time update for guest count:`, data.count);
      setGuestCount(data.count);
      
      // Add animation effect to highlight the change
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 700);
    });
    
    return unregister;
  }, [registerGuestUpdateHandler]);
  
  // Handle value changes
  const handleChange = async (count: number) => {
    if (count >= 0 && count <= maxGuests) {
      setGuestCount(count);
      try {
        // This will trigger real-time updates to other clients
        await storage.setAdditionalGuestCount(count);
      } catch (error) {
        console.error('Failed to update guest count:', error);
        // Revert UI state on error
        const currentCount = await storage.getAdditionalGuestCount();
        setGuestCount(currentCount);
      }
    }
  };
  
  const increment = () => handleChange(guestCount + 1);
  const decrement = () => handleChange(guestCount - 1);
  
  // Reset guest count
  const resetGuestCount = async () => {
    try {
      setIsLoading(true);
      // This will trigger real-time updates to other clients
      await storage.resetAdditionalGuestCount();
      setGuestCount(0);
    } catch (error) {
      console.error('Failed to reset guest count:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border border-slate-200 w-full max-w-2xl transition-all duration-300 hover:shadow-xl mb-8 ${isAnimating ? 'bg-amber-50' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
        <h2 className="font-medium text-xl text-slate-700 flex items-center">
          <svg className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
          </svg>
          <span>Additional Guests</span>
        </h2>
        
        <div className="flex items-center">
          <div className="flex items-center">
            <button 
              onClick={decrement}
              disabled={guestCount <= 0 || isLoading}
              className="w-10 h-10 rounded-l-md bg-amber-100 text-amber-700 flex items-center justify-center hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease guest count"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <input 
              type="number"
              min="0"
              max={maxGuests}
              value={guestCount}
              onChange={(e) => handleChange(parseInt(e.target.value || '0', 10))}
              className="h-10 w-16 text-center border-y border-amber-200 text-lg font-medium text-slate-800"
              aria-label="Guest count"
              disabled={isLoading}
            />
            
            <button
              onClick={increment}
              disabled={guestCount >= maxGuests || isLoading}
              className="w-10 h-10 rounded-r-md bg-amber-100 text-amber-700 flex items-center justify-center hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Increase guest count"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {guestCount > 0 && (
            <button 
              onClick={resetGuestCount}
              disabled={isLoading}
              className="ml-3 text-sm text-red-500 hover:text-red-600 font-medium flex items-center px-2 py-1.5 rounded-md hover:bg-red-50 transition-colors duration-200 whitespace-nowrap"
              aria-label="Reset guest count"
            >
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Reset
            </button>
          )}
        </div>
      </div>
      
      <p className="text-slate-600 border-l-4 border-amber-200 pl-3 py-2 bg-amber-50/50 italic rounded-r">
        Please indicate the number of additional guests joining your table.
      </p>
      
      <div className="mt-4 flex items-center">
        <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 flex items-center">
          <svg className="w-4 h-4 mr-1.5 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span>Total additional guests: {guestCount}</span>
        </div>
      </div>
    </div>
  );
};

export default GuestCounter; 