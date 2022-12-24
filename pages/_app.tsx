import '../styles/main.sass';

import { MantineProvider } from '@mantine/core';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 320,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
              },
            },
          },
        },
        breakpoints: {
          xs: 320,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
        },
      }}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="/public/site.webmanifest" />
        <title>{'< iTsygankov />'}</title>
        <meta property="og:title" content='< iTsygankov />' />
        <meta name="author" content="Igor Tsygankov" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
