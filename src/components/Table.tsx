'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Seat from '~/components/Seat';
import { storage } from '~/utils/storage';
import type { TableProps } from './types';
import FoodSelector from './FoodSelector';
import GuestCounter from './GuestCounter';

// Seeded random function to prevent hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const Table: React.FC<TableProps> = ({ seats }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const positions = useMemo(() => seats.map(seat => seat.position), [seats]);
  
  // Generate stable wood grain positions
  const woodGrainPositions = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      left: `${(seededRandom(i * 1.1) * 100).toFixed(2)}%`,
      opacity: (0.1 + seededRandom(i * 2.2) * 0.2).toFixed(2)
    }));
  }, []);

  // Memoize the count function to prevent recreating it on each render
  const countSelectedSeats = useCallback(async () => {
    try {
      // Try to use the async API method first
      const count = await storage.getSelectedSeatsCount(positions);
      setSelectedCount(count);
    } catch (error) {
      // Fallback to sync method if async fails
      console.log('Using sync method for seat count');
      const syncCount = storage.getSelectedSeatsCountSync(positions);
      setSelectedCount(syncCount);
    }
  }, [positions]);

  // Update the seat counter on mount and when localstorage changes
  useEffect(() => {
    // Initial count
    countSelectedSeats();
    
    // Listen for storage events (changes from other tabs)
    const handleStorageChange = () => {
      countSelectedSeats();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for when seats are toggled in the current tab
    const handleCustomToggle = () => {
      countSelectedSeats();
    };
    
    window.addEventListener('seatToggled', handleCustomToggle);
    
    // Reduce polling frequency to save resources (from 2000ms to 5000ms)
    const interval = setInterval(() => {
      countSelectedSeats();
    }, 5000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('seatToggled', handleCustomToggle);
      clearInterval(interval);
    };
  }, [countSelectedSeats]);

  // Function to clear all seat selections - memoized to prevent recreation
  const clearAllSelections = useCallback(async () => {
    await storage.clearAllSeatSelections(positions);
    
    // Also reset guest count to 0
    await storage.resetAdditionalGuestCount();
    
    // Force a refresh
    window.location.reload();
  }, [positions]);

  // Get additional guests count - memoized to prevent recreating on each render
  const [additionalGuests, setAdditionalGuests] = useState(0);
  
  const updateAdditionalGuests = useCallback(async () => {
    try {
      const count = await storage.getAdditionalGuestCount();
      setAdditionalGuests(count);
    } catch (error) {
      console.error('Error fetching additional guests:', error);
    }
  }, []);
  
  // Update additional guests count on mount and when the value changes
  useEffect(() => {
    updateAdditionalGuests();
    
    // Listen for guest count changes
    const handleGuestCountChange = () => {
      updateAdditionalGuests();
    };
    
    window.addEventListener('guestCountChanged', handleGuestCountChange);
    
    // Also poll for guest count changes
    const guestInterval = setInterval(() => {
      updateAdditionalGuests();
    }, 5000);
    
    return () => {
      window.removeEventListener('guestCountChanged', handleGuestCountChange);
      clearInterval(guestInterval);
    };
  }, [updateAdditionalGuests]);

  // Calculate total headcount (selected seats + additional guests)
  const totalHeadcount = selectedCount + additionalGuests;

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 pt-8 sm:pt-16">
      <div className="relative mb-16 sm:mb-32 w-full max-w-[700px]">
        {/* Table */}
        <div className="relative bg-amber-700 rounded-xl w-full h-[200px] sm:h-[300px] shadow-xl border border-amber-800 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
          {/* Table texture */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-[15px] w-full border-b border-amber-950/20"></div>
            ))}
          </div>
          
          {/* Wood grain texture - Using pre-calculated stable positions */}
          <div className="absolute inset-0 opacity-10">
            {woodGrainPositions.map((style, i) => (
              <div 
                key={`grain-${i}`} 
                className="absolute h-full w-[3px] bg-amber-950/10"
                style={{ 
                  left: style.left,
                  opacity: style.opacity
                }}
              ></div>
            ))}
          </div>
          
          {/* Table shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl"></div>
          
          {/* Table centerpiece */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-slate-100 rounded-full w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center shadow-md">
              <div className="bg-slate-200 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center border border-slate-300">
                <div className="bg-slate-300 rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-xs text-slate-500 font-medium">
                  TABLE
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seats container - properly aligned and centered */}
        <div className="absolute inset-0">
          {/* Top row - centered with the table */}
          <div className="absolute top-[-80px] sm:top-[-120px] w-full">
            <div className="grid grid-cols-3 mx-auto">
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'top-left')?.name || 'Empty'}
                  position="top"
                  seatId="top-left"
                />
              </div>
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'top-center')?.name || 'Empty'}
                  position="top"
                  seatId="top-center"
                />
              </div>
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'top-right')?.name || 'Empty'}
                  position="top"
                  seatId="top-right"
                />
              </div>
            </div>
          </div>
          
          {/* Bottom row - centered with the table */}
          <div className="absolute bottom-[-80px] sm:bottom-[-120px] w-full">
            <div className="grid grid-cols-3 mx-auto">
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'bottom-left')?.name || 'Empty'}
                  position="bottom"
                  seatId="bottom-left"
                />
              </div>
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'bottom-center')?.name || 'Empty'}
                  position="bottom"
                  seatId="bottom-center"
                />
              </div>
              <div className="flex justify-center">
                <Seat 
                  name={seats.find(s => s.position === 'bottom-right')?.name || 'Empty'}
                  position="bottom"
                  seatId="bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Guests Counter - added between table and food selection */}
      <GuestCounter maxGuests={10} />
      
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg border border-slate-200 w-full max-w-2xl transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
          <h2 className="font-medium text-xl text-slate-700 flex items-center">
            <svg className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            Food Selection
          </h2>
          
          {/* Status indicators and actions */}
          <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
            <div className="bg-slate-100 px-3 py-2 rounded-full text-sm font-medium text-slate-600 flex items-center flex-shrink-0 whitespace-nowrap">
              <svg className="w-4 h-4 mr-1.5 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{selectedCount} of {seats.length} seats</span>
            </div>
            
            {/* Total headcount indicator */}
            {totalHeadcount > 0 && (
              <div className="bg-emerald-100 px-3 py-2 rounded-full text-sm font-medium text-emerald-700 flex items-center flex-shrink-0 whitespace-nowrap">
                <svg className="w-4 h-4 mr-1.5 text-emerald-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Total: {totalHeadcount}</span>
              </div>
            )}
            
            {selectedCount > 0 && (
              <button 
                onClick={clearAllSelections}
                className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center px-3 py-1.5 rounded-md hover:bg-red-50 transition-colors duration-200 flex-shrink-0 whitespace-nowrap"
              >
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Reset All
              </button>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 mb-8 border-l-4 border-amber-200 pl-3 py-2 bg-amber-50/50 italic rounded-r">
          Items selected are tonights dinner.
        </p>
        
        {/* Food selector component */}
        <FoodSelector />
      </div>
    </div>
  );
};

export default React.memo(Table); 