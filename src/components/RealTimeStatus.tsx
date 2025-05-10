import React from 'react';
import { useRealTime } from '~/context/RealTimeProvider';

export const RealTimeStatus: React.FC = () => {
  const { connectionStatus, lastUpdate } = useRealTime();
  
  const getStatusColor = () => {
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
    </div>
  );
}; 