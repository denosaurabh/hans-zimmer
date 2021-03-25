import { Flex, Heading, Text } from '@chakra-ui/react';

interface NominationNumberI {
  number: number;
  title: { top: string; bottom: string };
  [key: string]: unknown;
}

const NominationNumber = ({ number, title, ...rest }: NominationNumberI) => {
  return (
    <Flex position="absolute" alignItems="center" {...rest}>
      <Heading fontSize={{ base: '4xl', md: '5xl', lg: '8xl' }} marginRight={4}>
        {number}&nbsp;/
      </Heading>
      <Text fontWeight="normal" fontSize={{ base: 'md', md: 'lg', xl: 'xl' }}>
        {title.top} <br />
        {title.bottom}
      </Text>
    </Flex>
  );
};

export default NominationNumber;
