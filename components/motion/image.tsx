import { Image, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MainImageProps = Merge<HTMLChakraProps<'image'>, HTMLMotionProps<'img'>>;

const MotionImage: React.FC<MainImageProps> = motion(Image);

export default MotionImage;
