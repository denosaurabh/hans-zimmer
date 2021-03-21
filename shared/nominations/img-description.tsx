import { Flex, VStack, Text, Image } from '@chakra-ui/react';

const ImgDescription = () => (
  <Flex position="relative" marginBottom={52}>
    <Image
      rounded="full"
      h="lg"
      w="lg"
      objectFit="cover"
      src="/assets/hans-zimmer-blue.jpeg"
    />

    <VStack
      spacing="8"
      alignItems="left"
      position="absolute"
      top="30%"
      right="0"
      w="40%"
    >
      <Text
        color="grey.medium"
        letterSpacing="wide"
        fontSize="xl"
        fontWeight="light"
      >
        Zimmer has received a range of honors and awards, including the Lifetime
        Archivement Award in film Composition from the National Board of Review,
        the Frederick Loewe Award in 2003 at the Palm Springs International Film
        Festival, ASCAP&apos;s Henry Mancini Award for Lifetime Archivement, and
        BMI&apos;s Richard Kirk Award for lifetime archivement in 1996.
      </Text>

      <Text letterSpacing="wide" fontWeight="normal" casing="uppercase">
        GO TO DISCOGRAPHY &#8599; <br /> ARCHIVE
      </Text>
    </VStack>
  </Flex>
);

export default ImgDescription;
