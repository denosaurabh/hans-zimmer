import { Flex, HStack, Text } from '@chakra-ui/react';

const Logo = () => (
  <HStack spacing={-4} w="min">
    <Text
      fontSize="4xl"
      fontWeight="normal"
      fontFamily="serif"
      lineHeight="shorter"
    >
      H
    </Text>
    <Flex direction="column">
      <Text
        fontSize="4xl"
        fontWeight="normal"
        fontFamily="serif"
        lineHeight="shorter"
        marginTop={3.5}
      >
        Z
      </Text>
    </Flex>
  </HStack>
);

export default Logo;
