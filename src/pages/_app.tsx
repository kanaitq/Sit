import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import { RealTimeProvider } from '~/context/RealTimeProvider';
import '~/styles/globals.css';

// Simple fallback UI for errors
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg border border-red-200">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-red-500 mb-4">{error.message}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RealTimeProvider>
        <Component {...pageProps} />
      </RealTimeProvider>
    </ErrorBoundary>
  );
} 