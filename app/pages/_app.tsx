import { AppProps, AppType } from 'next/app'; // Import AppProps for better type support
import { withTRPC } from '@trpc/next';
// import superjson from 'superjson'; // If you use superjson for serialization

import {AppRouter} from './api/trpc/[trpc]';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// Function to determine the base URL for the tRPC client
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Browser should return an empty string
    return '';
  }
  // If running on Vercel, use the environment variable
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback to localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

// Wrap your MyApp with withTRPC
export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url: `${getBaseUrl()}/api/trpc`,
      // Optional: if you use superjson for serialization
      // transformer: superjson,
    };
  },

  ssr: false,
})(MyApp);
