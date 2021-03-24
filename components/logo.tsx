import { Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <HStack spacing={-4} w="min" _hover={{ cursor: 'pointer' }}>
      <Text
        fontSize="4xl"
        fontWeight="normal"
        fontFamily="serif"
        lineHeight="shorter"
      >
        H
      </Text>
      <Flex flexDirection="column">
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
  </Link>
);

export default Logo;
