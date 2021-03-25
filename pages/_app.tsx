import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import { MotionFlex, MotionHeading } from '@components';
import CosiTimesFont from '@theme/fonts';
import theme from '@theme/theme';

function MyApp({ Component, pageProps, router }: AppProps) {
  const boxVraiants = {
    cover: { top: 0, left: 0, width: '100%', height: '100vh' },
    hide: {
      width: '100%',
      height: '0vh',
      transition: {
        delay: 4, // Intial delay for credits
        type: 'intertia',
        ease: 'anticipate',
        duration: 1.2,
        originX: 1,
        originY: 1,
        transitionEnd: {
          display: 'none'
        }
      }
    },
    pageExitCover: {
      width: '100%',
      height: '100vh',
      transition: { ease: 'anticipate', delay: 0.5, duration: 0.8 }
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <CosiTimesFont />

      <AnimatePresence exitBeforeEnter>
        <MotionFlex
          key={router.route}
          position="absolute"
          zIndex={100}
          bgColor="grey.light"
          style={{
            width: '100%',
            transformOrigin: 'bottom',
            boxSizing: 'content-box'
          }}
          variants={boxVraiants}
          initial="cover"
          animate="hide"
          exit="pageExitCover"
          // Flex Props
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <MotionHeading fontSize="4xl" color="grey.dark">
            DESIGNED BY: SET REDESIGN
          </MotionHeading>
          <MotionHeading fontSize="4xl" color="grey.dark">
            DEVELOPED BY: DENOSAURABh
          </MotionHeading>
        </MotionFlex>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
