/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import AOS from 'aos';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import React, { useEffect } from 'react';

import '@/styles/globals.css';
import '@/styles/aos.scss';
import '@/styles/globals.css';
import '@/styles/colors.css';

import axiosClient from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

// const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
//   const { data } = await axiosClient.get(`${queryKey?.[0]}`);
//   return data;
// };

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       queryFn: defaultQueryFn,
//     },
//   },
// });

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any;
  pageProps: any;
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <SessionProvider session={session}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <DismissableToast />
        <Component {...pageProps} />
        {/* import { ReactQueryDevtools } from 'react-query/devtools';
        <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
