import { Flex, VStack, Text } from '@chakra-ui/react';
import { useViewportScroll, useTransform } from 'framer-motion';
import { MotionImage } from '@components/index';

const ImgHeading = () => {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 400], [0, 250]);

  return (
    <Flex position="relative">
      <MotionImage
        src="/assets/hans-zimmer.png"
        bgSize="cover"
        alt="hans zimmer sitting on chair"
        style={{ y: y1, height: 'fit-content', objectFit: 'cover' }}
        initial={{
          opacity: 0,
          height: '600px',
          width: '0%'
        }}
        animate={{
          opacity: 1,
          height: '600px',
          width: '50%'
        }}
        transition={{ delay: 0.5, duration: 1.2, velocity: 10 }}
        whileHover={{ scale: 0.96 }}
      />

      <VStack
        spacing="8"
        alignItems="left"
        position="absolute"
        top="90%"
        right="0"
        w="60%"
      >
        <Text
          color="grey.medium"
          letterSpacing="wide"
          fontSize="xl"
          fontWeight="light"
        >
          Voluptate officia officia nostrud eu duis nisi ut tempor it proident
          veniam id minim mollit elit cupidatat cu labore qui id. Reprehenderit
          excepteur enim duis trud aliqua ut fugiat nisi velit nisi fugiat
          ullamco sint.Anim excepteur aliqua aliqua occaecat proident quis
          reprehenderit voluptate nisi consectetur.
        </Text>

        <Text letterSpacing="wide" fontWeight="normal" casing="uppercase">
          Hans Zimmer Tour | Live &#8599; <br /> In Pargue
        </Text>
      </VStack>
    </Flex>
  );
};

export default ImgHeading;
