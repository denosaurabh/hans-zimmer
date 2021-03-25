import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import { OnboardingProvider } from '@contexts/onboarding';
import CosiTimesFont from '@theme/fonts';
import theme from '@theme/theme';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <OnboardingProvider>
        <CosiTimesFont />

        <AnimatePresence exitBeforeEnter>
          <Component route={router.route} key={router.route} {...pageProps} />
        </AnimatePresence>
      </OnboardingProvider>
    </ChakraProvider>
  );
}

export default MyApp;
