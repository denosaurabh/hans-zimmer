import { useEffect, useRef, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useViewportScroll, useTransform } from 'framer-motion';
import { MotionFlex, MotionImage } from '@components/index';
import { useInView } from 'react-intersection-observer';

const Latests = () => {
  const { scrollY } = useViewportScroll();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const yOffset = 100;

  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    console.log(ref.current.offsetTop);
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
    scrollY.onChange(v => console.log(v));
  }, [scrollY]);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    console.log(
      ref.current.offsetTop,
      ref.current.offsetHeight,
      window.innerHeight
    );

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, scrollY]);

  // const transformInitialValue = elementTop - clientHeight * triggerPoint;
  // const transformFinalValue = elementTop + yOffset;

  // const yRange = [transformInitialValue, transformFinalValue];

  const y2 = useTransform(scrollY, [elementTop, elementBottom], [0, 200]);

  // const opacityInitialValue = fadeOut ? 0 : 1;
  // const opacityRange = useMemo(() => [opacityInitialValue, 1], [
  //   opacityInitialValue
  // ]);

  // // const yOpacityRange = [transformInitialValue, transformFinalValue];
  // const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
  // const opacity = useTransform(
  //   scrollY,
  //   yOpacityRange,
  //   opacityRange,
  //   'anticipate'
  // );

  // const y2 = useTransform(scrollY, [0, -parallaxY], [0, 50]);
  const y3 = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <MotionFlex marginTop={96} direction="column">
      <Heading fontSize="7xl" marginBottom={16} fontWeight="light">
        LATEST /
      </Heading>
      <MotionFlex
        ref={ref}
        width="30%"
        direction="column"
        style={{ y: y2, x: 0 }}
      >
        <MotionImage src="/assets/barry-levinson.jfif" marginBottom="8" />
        <Heading
          fontFamily="body"
          fontSize="3xl"
          fontWeight="normal"
          marginBottom="6"
        >
          NEW FILM IS &#8599; <br /> DIRECTED BY BARRY LEVINSON
        </Heading>
        <Text size="sm" fontWeight="light">
          2020, Sep 15
        </Text>
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
    </MotionFlex>
  );
};

export default Latests;
