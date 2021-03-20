import { Heading, Text } from '@chakra-ui/react';
import { useViewportScroll, useTransform } from 'framer-motion';
import { MotionFlex, MotionImage } from '@components/index';

const Latests = () => {
  const { scrollY } = useViewportScroll();

  const y2 = useTransform(scrollY, [0, 600], [0, 50]);
  const y3 = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <MotionFlex marginTop={96} direction="column">
      <Heading fontSize="7xl" marginBottom={16} fontWeight="light">
        LATEST /
      </Heading>
      <MotionFlex width="30%" direction="column" style={{ y: y2 }}>
        <MotionImage src="/assets/barry-levinson.jfif" marginBottom="8" />
        <Heading
          fontFamily="body"
          fontSize="3xl"
          fontWeight="normal"
          marginBottom="6"
        >
          NEW FILM IS &#8599; <br /> DIRECTED BY BARRY LEVINSON
        </Heading>
        <Text fontWeight="light">2020, Sep 15</Text>
      </MotionFlex>
      <MotionFlex width="60%" direction="column" style={{ y: y3 }}>
        <MotionImage src="/assets/bond-movie.png" marginBottom={8} />
        <Heading
          fontFamily="body"
          fontSize="3xl"
          fontWeight="normal"
          marginBottom="6"
        >
          &apos; NO TIME TO DIE&apos; / HANS ZIMMER &#8599; <br /> TAKES OVER AS
          COMPOSER ON <br /> BOND MOVIE
        </Heading>
        <Text fontWeight="light">2020, June 06</Text>
      </MotionFlex>
      {/* </Grid> */}
    </MotionFlex>
  );
};

export default Latests;
