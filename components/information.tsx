import { Flex, Heading, Text, VStack, Link } from '@chakra-ui/react';

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
      <Link
        fontSize="2xl"
        marginBottom={20}
        textDecoration="underline"
        href="http://www.onlinewebfonts.com"
        textAlign="center"
      >
        Online Web Fonts
      </Link>
      <VStack spacing={8}>
        <Heading fontSize={{ base: '2xl', md: '5xl' }}>
          DESIGNED BY: &nbsp;
          <Link fontWeight="bold" href="https://redesign.am" target="blank">
            SET REDESIGN &#8599;
          </Link>
        </Heading>

        <Heading fontSize={{ base: '2xl', md: '5xl' }}>
          DEVELOPED BY: &nbsp;
          <Link fontWeight="bold" href="https://denosaurabh.me" target="blank">
            DENOSAURABh &#8599;
          </Link>
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Information;
