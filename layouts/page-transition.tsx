import { useOnboarding } from '@contexts/onboarding';
import { MotionFlex, MotionHeading } from '@components';

const PageTransition = () => {
  const { pageTransitionDuration, onboarding, setOnboarding } = useOnboarding();

  const boxVraiants = {
    cover: { top: 0, left: 0, width: '100%', height: '100vh' },
    hide: {
      width: '100%',
      height: '0vh',
      transition: {
        delay: pageTransitionDuration, // Intial delay for credits
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
      transition: { ease: 'anticipate', duration: 1.2 }
    }
  };

  return (
    <MotionFlex
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
      onAnimationComplete={setOnboarding}
      // Flex Props
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <MotionHeading
        delay={0.5}
        visibility={!onboarding ? 'hidden' : 'unset'}
        fontSize={{ base: 'xl', md: '4xl' }}
        color="grey.dark"
      >
        DESIGNED BY: SET REDESIGN
      </MotionHeading>

      <MotionHeading
        delay={0.5}
        visibility={!onboarding ? 'hidden' : 'unset'}
        fontSize={{ base: 'xl', md: '4xl' }}
        color="grey.dark"
      >
        DEVELOPED BY: DENOSAURABH
      </MotionHeading>
    </MotionFlex>
  );
};

export default PageTransition;
