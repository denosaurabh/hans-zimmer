import { VStack, Text } from '@chakra-ui/react';

interface DescriptionI {
  children: string;
  subtitle: {
    top: string;
    bottom: string;
  };
  [key: string]: unknown;
}

const Description = ({ children, subtitle, ...rest }: DescriptionI) => {
  const { top, bottom } = subtitle;

  return (
    <VStack spacing="8" alignItems="left" {...rest}>
      <Text
        color="grey.medium"
        letterSpacing="wide"
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="light"
      >
        {children}
      </Text>

      <Text
        letterSpacing="wide"
        fontSize={{ base: 'xl', md: 'x' }}
        fontWeight="medium"
        casing="uppercase"
        _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        {top} &#8599; <br /> {bottom}
      </Text>
    </VStack>
  );
};

export default Description;
