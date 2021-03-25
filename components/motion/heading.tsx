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
  [key: string]: unknown;
}

const MotionHeading = ({ children, ...rest }: MotionHeadingI) => {
  // const styles = useStyleConfig('Heading', { size });

  // const [, setAlreadyShown] = useState(false);
  // const { inView, ref }: InViewHookResponse = useInView();

  // useEffect(() => {
  //   if (inView) setAlreadyShown(true);
  // }, [inView]);

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
        // ref={ref}
        // sx={styles}
        variants={container}
        initial={'hidden'}
        // animate={inView ? 'show' : ''}
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
