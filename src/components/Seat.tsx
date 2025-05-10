'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { storage } from '~/utils/storage';
import type { SeatProps } from './types';

const Seat: React.FC<SeatProps> = ({ name, position, seatId }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load selection state on mount
  useEffect(() => {
    const loadSeatSelection = async () => {
      try {
        // Try API first
        const selected = await storage.isSeatSelected(seatId);
        setIsSelected(selected);
      } catch (error) {
        // Fallback to localStorage
        console.log('Using localStorage fallback for seat selection');
        const syncSelected = storage.isSeatSelectedSync(seatId);
        setIsSelected(syncSelected);
      }
    };
    
    loadSeatSelection();
  }, [seatId]);

  // Memoize toggle function to prevent recreation on each render
  const toggleSelection = useCallback(async () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
    
    const newState = !isSelected;
    setIsSelected(newState);
    
    try {
      // Try API first
      await storage.toggleSeatSelection(seatId, newState);
    } catch (error) {
      // Fallback to localStorage
      console.log('Using localStorage fallback for toggling seat');
    storage.setItem(`seat-${seatId}`, String(newState));
    }
    
    // Dispatch custom event for the Table component to catch
    window.dispatchEvent(new CustomEvent('seatToggled', {
      detail: { seatId, selected: newState }
    }));
  }, [isSelected, seatId]);

  // Memoize class strings to avoid recalculating them on every render
  const chairClasses = `
          relative 
          ${position === 'bottom' ? 'order-first' : 'order-last'}
          cursor-pointer
          transition-all duration-300 ease-in-out
    mx-auto mb-2 sm:mb-4
          ${isAnimating ? 'scale-110' : 'hover:scale-105'}
          transform-gpu
  `;

  const mainChairClasses = `
    w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] 
          ${isSelected 
            ? 'bg-gradient-to-br from-emerald-200 to-emerald-300 border-emerald-400' 
            : 'bg-gradient-to-br from-slate-200 to-slate-300 border-slate-300'
          } 
          rounded-full shadow-lg border-2 flex items-center justify-center
          transition-all duration-300
          ${isSelected ? 'shadow-emerald-200/50' : ''}
  `;

  const nameTagClasses = `
    px-2 sm:px-3 py-1 rounded-full shadow-md border
    ${position === 'top' ? 'order-first mb-2 sm:mb-4' : 'order-last mt-2 sm:mt-4'}
    transition-all duration-300 cursor-pointer
    h-[24px] sm:h-[30px] w-full flex items-center justify-center
    ${isSelected 
      ? 'bg-emerald-500 text-white border-emerald-600 shadow-emerald-200/50' 
      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
    }
    ${isAnimating ? 'scale-110' : 'hover:scale-105'}
    transform-gpu
  `;

  return (
    <div className="flex flex-col items-center w-[90px] sm:w-[120px]">
      {/* Chair */}
      <div 
        className={chairClasses}
        onClick={toggleSelection}
        data-selected={isSelected}
        data-seat-id={seatId}
      >
        <div className={mainChairClasses}>
          {/* Chair back */}
          <div className={`
            absolute 
            ${position === 'top' ? 'bottom-2' : 'top-2'} 
            w-[55px] sm:w-[70px] h-[15px] sm:h-[20px] 
            ${isSelected ? 'bg-emerald-300 border-emerald-400' : 'bg-slate-300 border-slate-400'} 
            rounded-full border shadow-sm
            transition-all duration-300
          `}>
            {/* Back details */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className={`
                w-[30px] sm:w-[40px] h-[8px] sm:h-[10px] 
                ${isSelected ? 'border-emerald-400/50' : 'border-slate-400/50'} 
                border-b
                transition-colors duration-300
              `}></div>
            </div>
          </div>
          
          {/* Chair seat */}
          <div className={`
            w-[55px] sm:w-[70px] h-[55px] sm:h-[70px] 
            ${isSelected 
              ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 border-emerald-200' 
              : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-200'
            } 
            rounded-full flex items-center justify-center shadow-inner border
            transition-all duration-300
          `}>
            <div className={`
              w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full border border-dashed 
              ${isSelected ? 'border-emerald-300' : 'border-slate-300'}
              transition-colors duration-300
            `}></div>
          </div>
        </div>

        {/* Selection indicator with animation */}
        {isSelected && (
          <div className={`
            absolute top-[-5px] right-[-5px] 
            w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full 
            flex items-center justify-center 
            border-2 border-white shadow-md
            ${isAnimating ? 'animate-bounce' : ''}
          `}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Name tag with enhanced styling */}
      <div 
        className={nameTagClasses}
        onClick={toggleSelection}
      >
        <div className="flex items-center whitespace-nowrap text-xs sm:text-sm">
          <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-700'} truncate max-w-[70px] sm:max-w-[100px]`}>
            {name}
          </span>
          {!isSelected && (
            <span className="ml-1 text-[10px] sm:text-xs text-slate-400 opacity-70 hidden sm:inline">(tap)</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(Seat); 