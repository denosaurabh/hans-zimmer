import { Heading, Text } from '@chakra-ui/react';
import { MotionFlex, MotionImage } from '@components/index';

interface NewsBoxI {
  image: string;
  label: string;
  heading: { top: string; mid: string; bottom?: string };
  imageSize?: string;
  date: string;
  [key: string]: unknown;
}

const NewsBox = (props: NewsBoxI) => {
  const { image, heading, label, imageSize = 'auto', date, ...rest } = props;
  const { top, mid, bottom } = heading;

  return (
    <MotionFlex
      flexDirection="column"
      style={{ x: 0 }}
      transition={{ duration: 2 }}
      {...rest}
    >
      <MotionImage
        src={image}
        alt={label}
        height={imageSize}
        width="full"
        marginBottom="8"
        // initial={{ backgroundSize: 'auto' }}
        // animate={{ backgroundSize: '130%' }}
        // transition={{ delay: 7 }}
        objectFit="cover"
      />
      <Heading
        fontFamily="body"
        fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
        fontWeight="normal"
        marginBottom="6"
      >
        {top} &#8599; <br />
        {mid} <br />
        {bottom}
      </Heading>
      <Text fontSize={{ base: 'xs', md: 'unset' }} fontWeight="light">
        {date}
      </Text>
    </MotionFlex>
  );
};

export default NewsBox;

/* 

      <Flex flexDirection="column" marginBottom={6}>
        <MotionHeading
          fontFamily="body"
          fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
          fontWeight="normal"
        >
          {top + '\u2197'}
        </MotionHeading>
        <MotionHeading
          fontFamily="body"
          fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
          fontWeight="normal"
        >
          {mid}
        </MotionHeading>
        <MotionHeading
          fontFamily="body"
          fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
          fontWeight="normal"
        >
          {bottom ?? ''}
        </MotionHeading>
      </Flex>


*/
