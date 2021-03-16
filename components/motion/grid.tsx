import { Grid, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type GridProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionGrid: React.FC<GridProps> = motion(Grid);

export default MotionGrid;
