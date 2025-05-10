'use client';

import { useState, useEffect, useMemo, memo } from 'react';
import dynamic from 'next/dynamic';
import { type Seat } from '~/data/seatsData';
import { initDevEnvironment } from '~/utils/devInit';
import ErrorBoundary from './ErrorBoundary';
import NetworkStatus from './NetworkStatus';
import { RealTimeStatus } from './RealTimeStatus';

// Import components with dynamic imports in a client component
// Optimize loading state by memoizing it
const loadingTablePlaceholder = (
    <div className="w-full flex justify-center my-12">
      <div className="w-[700px] h-[450px] bg-slate-100 rounded-lg animate-pulse"></div>
    </div>
);

const loadingTimePlaceholder = (
    <div className="my-16 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Food Selection</h1>
      <div className="text-2xl font-medium text-slate-700 mb-2">Loading date...</div>
      <div className="text-5xl font-bold text-amber-600 mt-4 mb-4">Loading time...</div>
      <div className="text-sm text-amber-600 font-medium mt-3 py-2">
        Tonight's selections only. Auto-reset at midnight.
      </div>
    </div>
);

// Use dynamic imports with reduced loading states
const ClientTableWrapper = dynamic(() => import('./ClientTableWrapper'), {
  loading: () => loadingTablePlaceholder
});

const SingaporeTimeDisplay = dynamic(() => import('./SingaporeTimeDisplay'), {
  loading: () => loadingTimePlaceholder
});

interface DynamicContentWrapperProps {
  seats: Seat[];
}

function DynamicContentWrapper({ seats }: DynamicContentWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [initError, setInitError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize only once on mount
  useEffect(() => {
    setIsClient(true);
    
    // Initialize development environment with localStorage fallbacks
    try {
      initDevEnvironment();
    } catch (error) {
      console.error('Error initializing dev environment:', error);
      setInitError(error instanceof Error ? error : new Error('Unknown initialization error'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Memoize the SSR placeholder to prevent recreation on each render
  const ssrPlaceholder = useMemo(() => (
    <>
      <header className="text-center mb-12">
        {loadingTimePlaceholder}
      </header>
      {loadingTablePlaceholder}
    </>
  ), []);

  // Memoize the error display to prevent recreation on each render
  const errorDisplay = useMemo(() => {
    if (!initError) return null;
    
    return (
      <div className="container mx-auto p-8">
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-medium text-red-700 mb-4">Initialization Error</h2>
          <p className="text-red-600 mb-4">{initError.message}</p>
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }, [initError]);

  // Don't render anything during SSR to prevent hydration errors
  if (!isClient) {
    return ssrPlaceholder;
  }

  // Show initialization error if any
  if (initError) {
    return errorDisplay;
  }

  // Memoize the time display error fallback
  const timeDisplayErrorFallback = (
          <div className="my-16 py-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-6">Food Selection</h1>
      <div className="text-2xl font-medium text-slate-700 mb-2">Error loading time display</div>
      <button 
        className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
            </div>
  );

  // Memoize the table error fallback
  const tableErrorFallback = (
    <div className="w-full flex flex-col items-center justify-center my-12 p-8 bg-red-50 rounded-lg border border-red-200">
      <h3 className="text-lg font-medium text-red-700 mb-4">Error loading table</h3>
      <p className="text-red-600 mb-4">There was a problem loading the seating arrangement.</p>
      <button 
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
        </div>
    );

  return (
    <div className="relative">
      {/* Show error if initialization failed */}
      {initError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Failed to initialize the application. Please try refreshing the page.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Show loading spinner while components are loading */}
      {isLoading && !initError && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading components...</p>
        </div>
      )}

      {/* Render components once loaded */}
      {!isLoading && !initError && ClientTableWrapper && SingaporeTimeDisplay && (
        <>
          <ErrorBoundary fallback={tableErrorFallback}>
            <ClientTableWrapper seats={seats} />
          </ErrorBoundary>
          <div className="mt-8">
            <ErrorBoundary fallback={timeDisplayErrorFallback}>
              <SingaporeTimeDisplay />
            </ErrorBoundary>
          </div>
        </>
      )}

      {/* Network status indicator */}
      <NetworkStatus />

      {/* Real-time status indicator */}
      <RealTimeStatus />
    </div>
  );
} 

// Memoize the entire component to prevent unnecessary re-renders
export default memo(DynamicContentWrapper); 