import { Flex } from '@chakra-ui/react';
import { useViewportScroll, useTransform, useSpring } from 'framer-motion';
import { MotionImage, Description } from '@components';
import { useOnboarding } from '@contexts/onboarding';

const ImgHeading = () => {
  const { pageTransitionDuration } = useOnboarding();
  const { scrollY } = useViewportScroll();

  const y = useSpring(useTransform(scrollY, [400, 1200], [0, 250]), {
    damping: 100,
    stiffness: 100,
    mass: 10,
    duration: 0.6
  });

  return (
    <Flex position="relative">
      <MotionImage
        src="/assets/hans-zimmer.jpg"
        bgSize="cover"
        alt="hans zimmer sitting on chair"
        style={{
          y: y,
          minWidth: '28rem',
          height: 'fit-content',
          objectFit: 'cover'
        }}
        initial={{
          opacity: 0,
          height: '600px',
          width: '0%',
          y: 0
        }}
        animate={{
          opacity: 1,
          height: '600px',
          width: '50%'
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.9,
          delay: pageTransitionDuration + 0.4
        }}
        whileHover={{ scale: 0.96 }}
      />

      <Description
        subtitle={{ top: 'Hans Zimmer Tour | Live', bottom: 'In Pargue' }}
        position="absolute"
        top="90%"
        right="0"
        width={{ base: '90%', md: '60%' }}
      >
        Voluptate officia officia nostrud eu duis nisi ut tempor it proident
        veniam id minim mollit elit cupidatat cu labore qui id. Reprehenderit
        excepteur enim duis trud aliqua ut fugiat nisi velit nisi fugiat ullamco
        sint.Anim excepteur aliqua aliqua occaecat proident quis reprehenderit
        voluptate nisi consectetur.
      </Description>
    </Flex>
  );
};

export default ImgHeading;
