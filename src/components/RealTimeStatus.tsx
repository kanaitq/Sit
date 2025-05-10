import React, { useState, useEffect } from 'react';
import { useRealTime } from '~/context/RealTimeProvider';
import { useSocket } from '~/hooks/useSocket';

export const RealTimeStatus: React.FC = () => {
  // Use state to prevent hydration issues
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Only render on client-side to prevent hydration mismatch
  if (!isClient) {
    return null;
  }
  
  // Direct connection to socket to get detailed status
  const { isConnected, connectError } = useSocket();
  
  try {
    const { connectionStatus, lastUpdate } = useRealTime();
    
    const getStatusColor = () => {
      if (connectError) return 'bg-red-500';
      
      switch (connectionStatus) {
        case 'connected':
          return 'bg-green-500';
        case 'connecting':
          return 'bg-yellow-500';
        case 'disconnected':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };
    
    const getStatusText = () => {
      if (connectError) return 'Connection error';
      
      switch (connectionStatus) {
        case 'connected':
          return 'Real-time connected';
        case 'connecting':
          return 'Connecting...';
        case 'disconnected':
          return 'Disconnected';
        default:
          return 'Unknown status';
      }
    };
    
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center shadow-lg bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs">
        <div className={`w-2.5 h-2.5 rounded-full mr-2 ${getStatusColor()}`}></div>
        <span className="font-medium">{getStatusText()}</span>
        {lastUpdate && connectionStatus === 'connected' && (
          <span className="ml-2 text-gray-500">
            Last update: {lastUpdate.toLocaleTimeString()}
          </span>
        )}
        {connectError && (
          <span className="ml-2 text-red-500 cursor-pointer" title={connectError.message}>
            (Hover for details)
          </span>
        )}
        {isConnected && (
          <span className="ml-2 text-green-500">
            Socket active
          </span>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error rendering RealTimeStatus:', error);
    // Return a minimal fallback UI
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center shadow-lg bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs">
        <div className="w-2.5 h-2.5 rounded-full mr-2 bg-gray-500"></div>
        <span className="font-medium">Status unavailable</span>
        {connectError && (
          <span className="ml-2 text-red-500 cursor-pointer" title={connectError.message}>
            Connection error
          </span>
        )}
      </div>
    );
  }
}; 