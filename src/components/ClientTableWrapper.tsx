'use client';

import { useState, useEffect, useMemo, memo } from 'react';
import Table from './Table';
import type { TableProps } from './types';

const ClientTableWrapper: React.FC<TableProps> = ({ seats }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize the loading placeholder to prevent recreation on each render
  const loadingPlaceholder = useMemo(() => (
    <div className="w-full flex justify-center my-12">
      <div className="w-[700px] h-[450px] bg-slate-100 rounded-lg animate-pulse"></div>
    </div>
  ), []);

  // Return a loading placeholder or nothing on server-side
  if (!isClient) {
    return loadingPlaceholder;
  }

  // Only render the actual table component on client-side
  return <Table seats={seats} />;
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ClientTableWrapper); 