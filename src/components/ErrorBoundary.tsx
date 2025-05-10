'use client';

import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Lightweight error boundary component
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    
    // Log the error to console
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // Use provided fallback or default error UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Minimal default error UI
      return (
        <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
          <h2 className="text-base sm:text-lg font-medium text-red-700 mb-1.5 sm:mb-2">Something went wrong</h2>
          <div className="bg-white p-2 sm:p-3 rounded border border-red-100 mb-2 sm:mb-3">
            <p className="text-red-600 font-mono text-xs sm:text-sm overflow-auto max-h-[100px] sm:max-h-[150px]">
              {this.state.error?.toString()}
            </p>
          </div>
          <button
            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-xs sm:text-sm"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 