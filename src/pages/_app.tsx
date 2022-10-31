/* eslint-disable @typescript-eslint/no-explicit-any */
import AOS from 'aos';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/aos.scss';
import '@/styles/globals.css';
import '@/styles/colors.css';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

// https://gingerkang.tistory.com/123
// const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
//   Component,
//   pageProps,
// }) => {
//   const queryClientRef = React.useRef<QueryClient>();
//   if (!queryClientRef.current) {
//     queryClientRef.current = new QueryClient();
//   }
//   useEffect(() => {
//     AOS.init({
//       once: true,
//       duration: 500,
//       easing: 'ease-out-cubic',
//     });
//   });

//   return (
//     <>
//       <QueryClientProvider client={queryClientRef.current}>
//         <Hydrate state={pageProps.dehydratedState}>
//           <Component {...pageProps} />
//         </Hydrate>
//         {/* <ReactQueryDevtools /> */}
//       </QueryClientProvider>
//     </>
//   );
// };
// MyApp.getInitialProps = async ({
//   Component,
//   ctx,
// }: AppContext): Promise<AppInitialProps> => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };
// export default MyApp;

// https://velog.io/@hdpark/React-Query%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-Next.js-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4

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
        <Component {...pageProps} />
        {/* import { ReactQueryDevtools } from 'react-query/devtools';
        <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
