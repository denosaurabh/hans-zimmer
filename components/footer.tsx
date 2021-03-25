import { Flex, Heading } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    justifyContent="flex-end"
    paddingX="14"
    paddingY="10"
    position="absolute"
    bottom={0}
    marginBottom={0}
    borderTopColor="grey.medium"
    borderTopWidth="thin"
    width="full"
  >
    <Heading fontSize={{ base: 'xl', md: 'xl', lg: '2xl', xl: '4xl' }}>
      &copy; 1996-2021
    </Heading>
  </Flex>
);

export default Footer;
