import { VStack, Box, Link, Text, GridItem } from '@chakra-ui/react';

import { Logo, MotionGrid, MotionImage } from '@components';

const Header = () => {
  return (
    <MotionGrid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 2 }}
      gridTemplateColumns="50% 1fr 1fr 1fr"
      alignItems="start"
      className="header"
    >
      <Logo />
      <Box display={{ base: 'none', md: 'block' }}>
        <VStack alignItems="left" spacing={2}>
          <Link href="/nominations" fontWeight="" size="sm">
            NOMINATIONS
          </Link>
          <Text size="sm">AWARDS</Text>
        </VStack>
      </Box>
      <Box display={{ base: 'none', md: 'block' }} paddingLeft={8}>
        <VStack alignItems="left" spacing={2}>
          <Link href="/biography" size="sm">
            BIOGRAPHY
          </Link>
          <Text size="sm">CAREER</Text>
          <Text size="sm">ARCHIVES</Text>
          <Text size="sm">LATESTS</Text>
        </VStack>
      </Box>

      <GridItem colStart={{ base: 3, md: -1 }} marginTop={{ base: 20, md: 0 }}>
        <MotionImage
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
          src="/assets/circle.svg"
          width={32}
          height={32}
          boxSize={32}
          minWidth="80px"
          minHeight="80px"
          alt="Hans Zimmer Eauropean Tour"
        />
      </GridItem>
    </MotionGrid>
  );
};

export default Header;
