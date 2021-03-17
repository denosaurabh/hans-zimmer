import { Text, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type TextProps = Merge<HTMLChakraProps<'p'>, HTMLMotionProps<'p'>>;

const MotionText: React.FC<TextProps> = motion(Text);

export default MotionText;
