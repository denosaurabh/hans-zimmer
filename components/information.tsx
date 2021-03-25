import {
  Flex,
  Heading,
  Text,
  VStack,
  Link as ChakraLink
} from '@chakra-ui/react';
import Link from 'next/link';

const Information = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      h="auto"
      marginBottom={{ base: 40, md: 64 }}
    >
      <VStack spacing={8}>
        <Link href="/nominations">
          <Heading
            textDecoration="underline"
            fontSize={{ base: '4xl', md: '7xl' }}
          >
            NOMINATIONS &#8599;
          </Heading>
        </Link>
        <Link href="/biography">
          <Heading
            textDecoration="underline"
            fontSize={{ base: '4xl', md: '7xl' }}
          >
            BIOGRAPHY &#8599;
          </Heading>
        </Link>
      </VStack>
      <Text
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="hairline"
        marginY={20}
        textAlign="center"
      >
        &copy; ALL MATERIALS HAVE BEEN USED FOR NON-COMMERCIAL PURPOSES AND
        BELONG TO THEIR OWNERS
      </Text>
      <ChakraLink
        marginBottom={20}
        textDecoration="underline"
        href="http://www.onlinewebfonts.com"
        textAlign="center"
      >
        Online Web Fonts
      </ChakraLink>
      <VStack spacing={8}>
        <Heading fontSize={{ base: '2xl', md: '5xl' }}>
          DESIGNED BY: &nbsp;
          <Link href="https://redesign.am">SET REDESIGN &#8599;</Link>
        </Heading>

        <Heading fontSize={{ base: '2xl', md: '5xl' }}>
          DEVELOPED BY: &nbsp;
          <Link href="https://denosaurabh.me">DENOSAURABH &#8599;</Link>
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Information;
