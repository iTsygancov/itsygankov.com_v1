import '../styles/main.sass';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';


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
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
