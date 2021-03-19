import { Flex, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type FlexProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionFlex: React.FC<FlexProps> = motion(Flex);

export default MotionFlex;
