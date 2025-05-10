'use client';

import { useState, useEffect, memo } from 'react';

// Memoized component to prevent unnecessary re-renders
const NetworkStatus: React.FC = memo(() => {
  const [isOnline, setIsOnline] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Set initial status
    setIsOnline(navigator.onLine);
    
    // Define event handlers
    const handleOnline = () => {
      setIsOnline(true);
      setShowBanner(true);
      // Hide the banner after 5 seconds
      setTimeout(() => setShowBanner(false), 5000);
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      setShowBanner(true);
    };
    
    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Clean up
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Don't render anything if we're online and the banner is hidden
  if (isOnline && !showBanner) {
    return null;
  }

  return (
    <div 
      className={`
        fixed bottom-2 sm:bottom-4 right-2 sm:right-4 z-50 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg
        transition-all duration-300 transform
        ${showBanner ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        ${isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}
      `}
    >
      <div className="flex items-center">
        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1.5 sm:mr-2 ${isOnline ? 'bg-green-200' : 'bg-red-200'}`}></div>
        <span className="text-xs sm:text-sm font-medium">
          {isOnline ? 'Online - Changes will sync' : 'Offline - Using local data'}
        </span>
        {showBanner && isOnline && (
          <button 
            className="ml-2 sm:ml-3 text-green-200 hover:text-white"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
});

NetworkStatus.displayName = 'NetworkStatus';

export default NetworkStatus; 