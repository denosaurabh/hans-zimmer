// import { useEffect, useRef, useState } from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';
// import { useViewportScroll } from 'framer-motion';
import { MotionFlex, MotionImage } from '@components/index';

const Latests = () => {
  // const { scrollY } = useViewportScroll();
  /*
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [, setClientHeight] = useState(0);

  const yOffset = 100;

  const [, setIsInViewport] = useState(false);

  useEffect(() => {
    if (
      ref.current.offsetTop > scrollY &&
      ref.current.offsetTop < window.innerHeight
    ) {
      setIsInViewport(true);
    } else {
      setIsInViewport(false);
    }
  }, [ref]);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, scrollY]);

  const y2 = useSpring(
    useTransform(scrollY, [elementTop - 200, elementBottom - 200], [0, 150]),
    {
      damping: 100,
      stiffness: 100,
      mass: 10,
      duration: 2
    }
  );

  const y3 = useSpring(
    useTransform(scrollY, [elementTop - 200, elementBottom - 200], [0, 50]),
    {
      damping: 1,
      stiffness: 100,
      mass: 100,
      duration: 2
    }
  );

  */

  return (
    <MotionFlex
      marginTop={{ base: 40, md: 96 }}
      marginBottom={{ base: 44, md: 80 }}
      flexDirection="column"
      h="auto"
    >
      <Heading fontSize="7xl" marginBottom={16} fontWeight="light">
        LATEST /
      </Heading>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <MotionFlex
          // ref={ref}
          width={{ base: '60%', md: '30%' }}
          flexDirection="column"
          style={{ /* y: y2, */ x: 0 }}
          transition={{ duration: 2 }}
        >
          <MotionImage src="/assets/barry-levinson.jfif" marginBottom="8" />
          <Heading
            fontFamily="body"
            fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
            fontWeight="normal"
            marginBottom="6"
          >
            NEW FILM IS &#8599; <br /> DIRECTED BY BARRY LEVINSON
          </Heading>
          <Text fontSize={{ base: 'xs', md: 'unset' }} fontWeight="light">
            2020, Sep 15
          </Text>
        </MotionFlex>
        <MotionFlex
          width={{ base: '80%', md: '60%' }}
          flexDirection="column"
          // style={{ y: y3 }}
          transition={{ duration: 2 }}
        >
          <MotionImage src="/assets/billie-eilish.jpg" marginBottom={8} />
          <Heading
            fontFamily="body"
            fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
            fontWeight="normal"
            marginBottom="6"
          >
            &apos; NO TIME TO DIE&apos; / HANS ZIMMER &#8599; <br /> TAKES OVER
            AS COMPOSER ON <br /> BOND MOVIE
          </Heading>
          <Text fontWeight="light" fontSize={{ base: 'xs', md: 'unset' }}>
            2020, June 06
          </Text>
        </MotionFlex>
      </Flex>
    </MotionFlex>
  );
};

export default Latests;
