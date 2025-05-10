import type { AppProps } from 'next/app';
import { RealTimeProvider } from '~/context/RealTimeProvider';
import '~/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RealTimeProvider>
      <Component {...pageProps} />
    </RealTimeProvider>
  );
} 