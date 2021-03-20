import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import CosiTimesFont from '@theme/fonts';
import theme from '@theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CosiTimesFont />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
