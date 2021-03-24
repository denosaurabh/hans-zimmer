import { VStack, Text, Link } from '@chakra-ui/react';

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

      <Link
        letterSpacing="wide"
        fontSize={{ base: 'xl', md: 'x' }}
        fontWeight="medium"
        casing="uppercase"
      >
        {top} &#8599; <br /> {bottom}
      </Link>
    </VStack>
  );
};

export default Description;
