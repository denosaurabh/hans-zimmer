import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MainHeadingProps = Merge<HTMLChakraProps<'h1'>, HTMLMotionProps<'h1'>>;

const MainHeading: React.FC<MainHeadingProps> = motion(chakra.h1);

export default MainHeading;
