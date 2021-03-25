import React from 'react';
import { Heading, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';
// import { InViewHookResponse, useInView } from 'react-intersection-observer';

import MotionBox from '@components/motion/box';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionHeadingProps = Merge<HTMLChakraProps<'h2'>, HTMLMotionProps<'h2'>>;

const MotionHeadingJSX: React.FC<MotionHeadingProps> = motion(Heading);

interface MotionHeadingI {
  children: string;
  delay?: number;
  [key: string]: unknown;
}

const MotionHeading = ({ children, delay = 0.5, ...rest }: MotionHeadingI) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const item = {
    hidden: { x: 0, y: 200 },
    show: {
      x: 0,
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
        variants={container}
        initial={'hidden'}
        animate="show"
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
