import { Circle, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type CircleProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionCircle: React.FC<CircleProps> = motion(Circle);

export default MotionCircle;
