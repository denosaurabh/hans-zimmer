import { Box, Text, HTMLChakraProps, useStyleConfig } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

import MotionBox from '@components/motion/box';

type Merge<P, T> = Omit<P, keyof T> & T;
type TextProps = Merge<HTMLChakraProps<'p'>, HTMLMotionProps<'p'>>;

const MotionTextJSX: React.FC<TextProps> = motion(Text);

interface MotionTextI {
  size?: string;
  children: string;
  [key: string]: any;
}
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.015,
      delayChildren: 0.5
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.7
    }
  }
};

const MotionText = ({ size, children, ...rest }: MotionTextI) => {
  // const styles = useStyleConfig('Text', { size });

  return (
    <Box overflow="hidden">
      <MotionBox
        display="flex"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        {children.split('').map((el: string, i: number) => (
          <MotionTextJSX variants={textItem} key={i} {...rest}>
            {el == ' ' ? '\xa0' : el}
          </MotionTextJSX>
        ))}
      </MotionBox>
    </Box>
  );
};

export default MotionText;
