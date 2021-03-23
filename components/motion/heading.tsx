import { useState, useEffect } from 'react';
import { Heading, HTMLChakraProps, useStyleConfig } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import MotionBox from '@components/motion/box';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionHeadingProps = Merge<HTMLChakraProps<'h1'>, HTMLMotionProps<'h1'>>;

const MotionHeadingJSX: React.FC<MotionHeadingProps> = motion(Heading);

interface MotionHeadingI {
  size?: string;
  children: string;
  [key: string]: unknown;
}

const MotionHeading = ({ size, children, ...rest }: MotionHeadingI) => {
  // const styles = useStyleConfig('Heading', { size });

  const [alreadyShown, setAlreadyShown] = useState(false);
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) setAlreadyShown(true);
  }, [inView]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 150 },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        bounce: 0,
        damping: 18
      }
    }
  };

  return (
    <MotionBox height="min-content" overflow="hidden">
      <MotionHeadingJSX
        ref={ref}
        // sx={styles}
        variants={container}
        initial={'hidden'}
        animate={inView ? 'show' : ''}
        {...rest}
      >
        {children.split('').map((el: string, i: number) => {
          return (
            <motion.div variants={item} key={i}>
              {el == ' ' ? '\xa0' : el}
            </motion.div>
          );
        })}
      </MotionHeadingJSX>
    </MotionBox>
  );
};

export default MotionHeading;
