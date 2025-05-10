'use client';

import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { 
  getFoodOptions,
  getSelectedOptions, 
  getAvailableOptions, 
  toggleOptionSelection,
  clearAllFoodSelections
} from '~/data/foodOptions';
import { useRealTime } from '~/context/RealTimeProvider';
import type { FoodOption } from '~/data/foodOptions';

const FoodSelector: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<FoodOption[]>([]);
  const [availableOptions, setAvailableOptions] = useState<FoodOption[]>([]);
  const [highlightedOption, setHighlightedOption] = useState<string | null>(null);
  
  // Connect to real-time updates
  const { registerFoodUpdateHandler } = useRealTime();

  // Memoize the loadOptions function to prevent recreation on each render
  const loadOptions = useCallback(async () => {
    try {
      const selected = await getSelectedOptions();
      const available = await getAvailableOptions();
      setSelectedOptions(selected);
      setAvailableOptions(available);
    } catch (error) {
      console.error('Error loading food options:', error);
    }
  }, []);

  // Load initial state
  useEffect(() => {
    loadOptions();
    
    // Listen for changes from other components
    const handleStorageChange = () => {
      loadOptions();
    };
    
    window.addEventListener('foodOptionsChanged', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('foodOptionsChanged', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [loadOptions]);
  
  // Register for real-time updates
  useEffect(() => {
    // Handle real-time food updates from other clients
    const unregister = registerFoodUpdateHandler((data) => {
      console.log(`Real-time update for food ${data.id}:`, data.selected);
      
      // Apply highlight effect
      setHighlightedOption(data.id);
      setTimeout(() => setHighlightedOption(null), 700);
      
      // Refresh food options to reflect changes
      loadOptions();
    });
    
    return unregister;
  }, [registerFoodUpdateHandler, loadOptions]);

  // Memoize the handleOptionSelect function
  const handleOptionSelect = useCallback(async (id: string) => {
    // Visual highlight effect
    setHighlightedOption(id);
    setTimeout(() => setHighlightedOption(null), 300);
    
    // Toggle selection
    try {
      // This will trigger real-time updates to other clients
      await toggleOptionSelection(id);
      const selected = await getSelectedOptions();
      const available = await getAvailableOptions();
      setSelectedOptions(selected);
      setAvailableOptions(available);
    } catch (error) {
      console.error('Error toggling food option:', error);
    }
  }, []);

  // Clear all selected food options - memoized
  const handleClearAll = useCallback(async () => {
    try {
      // This will trigger real-time updates to other clients
      await clearAllFoodSelections();
      setSelectedOptions([]);
      const allOptions = await getFoodOptions();
      setAvailableOptions(allOptions);
    } catch (error) {
      console.error('Error clearing food selections:', error);
    }
  }, []);

  // Function to render SVG icon - memoized to prevent recreation
  const renderIcon = useCallback((path: string, size = "w-8 h-8") => (
    <svg className={`${size} text-slate-700`} viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  ), []);

  // Memoize the selected items section to prevent unnecessary re-renders
  const selectedItemsSection = useMemo(() => (
    <div className="bg-slate-50 p-3 sm:p-4 md:p-6 rounded-lg border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 md:mb-5 gap-2 sm:gap-0">
        <h3 className="font-medium text-base sm:text-lg text-slate-700 flex items-center">
            <span className="mr-2 text-emerald-500">
            {renderIcon("M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", "w-4 h-4 sm:w-5 sm:h-5")}
            </span>
            Selected Items
            <span className="ml-2 bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
              {selectedOptions.length}
            </span>
          </h3>
          {selectedOptions.length > 0 && (
            <button 
              onClick={handleClearAll}
            className="text-xs sm:text-sm text-red-500 hover:text-red-600 font-medium flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-red-50 transition-colors duration-200"
            >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Clear All
            </button>
          )}
        </div>
        
        {selectedOptions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-4 sm:py-8 bg-white rounded-lg border border-dashed border-slate-300">
            <div className="text-slate-400 mb-2">
            {renderIcon("M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", "w-10 h-10 sm:w-12 sm:h-12")}
            </div>
          <p className="text-slate-600 font-medium text-sm sm:text-base">No items selected yet</p>
            <p className="text-slate-400 text-xs mt-1">Choose from the options below</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-3">
            {selectedOptions.map(option => (
              <div 
                key={option.id}
              className={`bg-white rounded-lg p-2 sm:p-3 flex items-center shadow-sm border border-slate-200
                  hover:shadow-md hover:border-emerald-200 transition-all duration-200
                  ${highlightedOption === option.id ? 'bg-red-50 border-red-200' : ''}`}
              >
                <div className="flex items-center min-w-0 flex-1 mr-1">
                <div className="flex-shrink-0 mr-2 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-slate-50 rounded-full p-1">
                    {renderIcon(option.icon, "w-full h-full")}
                  </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm break-words word-wrap" title={option.name}>
                    {option.name}
                  </span>
                </div>
                <button 
                  onClick={() => handleOptionSelect(option.id)}
                className="flex-shrink-0 text-slate-400 hover:text-red-500 hover:bg-red-50 p-1 sm:p-1.5 rounded-full transition-colors duration-200"
                  aria-label={`Remove ${option.name}`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
  ), [selectedOptions, highlightedOption, handleClearAll, renderIcon, handleOptionSelect]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Selected food items section */}
      {selectedItemsSection}
      
      {/* Available food items - scrollable section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="font-medium text-base sm:text-lg text-slate-700 flex items-center">
            <span className="mr-2 text-amber-500">
              {renderIcon("M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", "w-4 h-4 sm:w-5 sm:h-5")}
            </span>
            Menu Options
          </h3>
          <div className="text-[10px] sm:text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full hidden sm:block">
            Scroll for more →
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:block">
          <div className="bg-gradient-to-r from-white to-transparent w-8 sm:w-12 h-16 sm:h-20"></div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:block">
          <div className="bg-gradient-to-l from-white to-transparent w-8 sm:w-12 h-16 sm:h-20"></div>
        </div>
        
        <div className="overflow-x-auto py-2 sm:py-3 pb-3 sm:pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
          <div className="flex flex-wrap sm:flex-nowrap sm:space-x-4 gap-2 sm:gap-3 sm:min-w-max p-1 sm:p-2">
            {availableOptions.map(option => (
              <div
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`flex flex-col items-center justify-center bg-white rounded-lg p-3 sm:p-4 md:p-5
                  min-w-[100px] sm:min-w-[120px] md:min-w-[140px] w-[calc(50%-0.5rem)] sm:w-auto
                  shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 
                  border border-slate-200 hover:border-emerald-300 transform hover:-translate-y-1
                  ${highlightedOption === option.id ? 'bg-emerald-50 border-emerald-300 shadow-md' : ''}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 p-2 shadow-inner">
                  {renderIcon(option.icon, "w-full h-full")}
                </div>
                <span className="text-slate-700 font-medium text-center text-xs sm:text-sm md:text-base px-1 break-words word-wrap" title={option.name}>
                  {option.name}
                </span>
              </div>
            ))}
            {availableOptions.length === 0 && (
              <div className="flex flex-col items-center justify-center bg-slate-50 rounded-lg p-4 sm:p-6 min-w-[250px] sm:min-w-[300px] h-[120px] sm:h-[160px] w-full">
                <div className="text-emerald-400 mb-2 sm:mb-3">
                  {renderIcon("M5 13l4 4L19 7", "w-8 h-8 sm:w-10 sm:h-10")}
                </div>
                <p className="text-slate-600 font-medium text-sm sm:text-base">All items have been selected!</p>
                <button
                  onClick={handleClearAll}
                  className="mt-3 sm:mt-4 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors duration-200"
                >
                  Reset Selections
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(FoodSelector); 