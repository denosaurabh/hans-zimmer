import { Flex, Text, Image } from '@chakra-ui/react';
import { MotionHeading } from '@components/index';

interface MovieBoxProps {
  year: number;
  image: string;
  title: string;
  job: string;
  index: number;
}

const MovieBox = ({ year, image, title, job, index }: MovieBoxProps) => {
  return (
    <Flex
      height="auto"
      // templateColumns="repeat(3, max-content)"
      paddingY="6"
      borderBottomColor="grey.light"
      borderBottomWidth="thin"
      placeItems="center"
      borderTopWidth={index === 0 ? 'thin' : ''}
      borderTopColor={index === 0 ? 'grey.light' : ''}
    >
      <Text fontFamily="heading" fontSize="2xl" marginRight="10%">
        {year}
      </Text>
      <Image
        h="140px"
        w="190px"
        objectFit="cover"
        justifySelf="flex-start"
        src={`/assets/${image}`}
        marginRight="20%"
      />
      <Flex direction="column">
        <MotionHeading size="sm">{title}</MotionHeading>
        <Text size="sm" variant="semibold">
          {job}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MovieBox;
