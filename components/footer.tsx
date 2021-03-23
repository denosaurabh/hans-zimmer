import { Flex, Heading } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    justifyContent="flex-end"
    paddingX="14"
    paddingY="10"
    marginBottom={0}
    position="absolute"
    bottom={0}
    borderTopColor="grey.medium"
    borderTopWidth="thin"
    width="full"
  >
    <Heading size="sm">&copy; 1996-2021</Heading>
  </Flex>
);

export default Footer;
