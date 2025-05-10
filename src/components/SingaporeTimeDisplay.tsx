'use client';

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { clearAllFoodSelections } from '~/data/foodOptions';
import { storage } from '~/utils/storage';

const SingaporeTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [lastResetDate, setLastResetDate] = useState<string | null>(null);
  
  // Fetch last reset time from the server or localStorage - memoized
  const fetchLastReset = useCallback(async () => {
    try {
      // Try API first
      const response = await fetch('/api/reset');
      if (!response.ok) {
        throw new Error('API unavailable');
      }
      const data = await response.json();
      if (data.lastReset) {
        setLastResetDate(new Date(data.lastReset).toISOString().split('T')[0]!);
      }
    } catch (error) {
      // Fallback to localStorage
      console.log('Using localStorage fallback for reset date');
      const storedResetDate = storage.getItem('last-reset-date');
      if (storedResetDate) {
        setLastResetDate(storedResetDate);
      }
    }
  }, []);
  
  // Perform a reset via the API or localStorage - memoized
  const performReset = useCallback(async () => {
    try {
      // Try API first
      const response = await fetch('/api/reset', { method: 'POST' });
      if (!response.ok) {
        throw new Error('API unavailable');
      }
      console.log('Midnight reset triggered via API');
    } catch (error) {
      // Fallback to localStorage reset
      console.log('Using localStorage fallback for reset');
      
      // Clear food selections
      await clearAllFoodSelections();
      
      // Clear seat selections via storage utility
      const seatPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
      await storage.clearAllSeatSelections(seatPositions);
      
      // Update reset date
      const sgDateString = new Date().toISOString().split('T')[0]!;
      storage.setItem('last-reset-date', sgDateString);
      setLastResetDate(sgDateString);
    }
    
    // Refresh the page to show updated state
    window.location.reload();
  }, []);
  
  // Update time function - memoized
  const updateTime = useCallback(() => {
    const now = new Date();
    
    // Get Singapore time using proper timezone calculation
    // Use the Intl.DateTimeFormat API with explicit Singapore timezone
    const sgTimeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Singapore',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
    
    const sgDateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Singapore',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Get formatted time and date strings
    setCurrentTime(sgTimeFormatter.format(now));
    setCurrentDate(sgDateFormatter.format(now));
    
    // For reset logic, get the Singapore date in YYYY-MM-DD format
    const sgDateParts = new Intl.DateTimeFormat('en-CA', { // en-CA uses YYYY-MM-DD format
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(now);
    
    // Build the date string in YYYY-MM-DD format
    const sgYear = sgDateParts.find(part => part.type === 'year')?.value;
    const sgMonth = sgDateParts.find(part => part.type === 'month')?.value;
    const sgDay = sgDateParts.find(part => part.type === 'day')?.value;
    const sgDateString = `${sgYear}-${sgMonth}-${sgDay}`;
    
    // Get hour in Singapore time for midnight check
    const sgHour = parseInt(new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Singapore',
      hour: 'numeric',
      hour12: false
    }).format(now));
    
    const sgMinute = parseInt(new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Singapore',
      minute: 'numeric'
    }).format(now));
    
    // If it's midnight (00:00-00:05) and we haven't reset today
    if (sgHour === 0 && sgMinute < 5 && lastResetDate !== sgDateString) {
      console.log('Midnight reset check - calling reset');
      performReset();
    }
  }, [lastResetDate, performReset]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Fetch the last reset date
    fetchLastReset();
    
    // Update immediately, then every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    
    return () => clearInterval(intervalId);
  }, [fetchLastReset, updateTime]);
  
  // Memoize the loading placeholder
  const loadingPlaceholder = useMemo(() => (
    <div className="my-8 sm:my-12 md:my-16 py-4 sm:py-6 md:py-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6">Food Selection</h1>
      <div className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 mb-1 sm:mb-2">Loading date...</div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4">Loading time...</div>
      <div className="text-xs sm:text-sm text-amber-600 font-medium mt-2 sm:mt-3 py-1 sm:py-2">
        Tonight's selections only. Auto-reset at midnight.
      </div>
    </div>
  ), []);
  
  if (!isMounted) {
    return loadingPlaceholder;
  }
  
  return (
    <div className="my-8 sm:my-12 md:my-16 py-4 sm:py-6 md:py-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6 relative">
        <span className="relative inline-block">
          Food Selections
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full"></div>
        </span>
      </h1>
      
      <div className="flex items-center mb-1 sm:mb-2">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700">{currentDate}</div>
      </div>
      
      <div className="flex items-center justify-center bg-amber-50 rounded-lg px-4 sm:px-5 md:px-6 py-3 sm:py-4 shadow-md border border-amber-100">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 tracking-wider font-mono transform transition-all duration-700 hover:scale-105">
          {currentTime}
        </div>
      </div>
      
      <div className="text-xs sm:text-sm text-amber-600 font-medium mt-3 py-1.5 sm:py-2 px-3 sm:px-4 bg-amber-50 rounded-full border border-amber-100 inline-flex items-center shadow-sm">
        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Tonight's selections only. Auto-reset at midnight.
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(SingaporeTimeDisplay); 