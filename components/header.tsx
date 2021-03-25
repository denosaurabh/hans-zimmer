import { VStack, Box, Text, GridItem, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { Logo, MotionGrid, MotionFlex } from '@components';

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
          <Link href="/nominations">NOMINATIONS</Link>
          <Text size="sm">AWARDS</Text>
        </VStack>
      </Box>
      <Box display={{ base: 'none', md: 'block' }} paddingLeft={8}>
        <VStack alignItems="left" spacing={2}>
          <Link href="/biography">BIOGRAPHY</Link>
          <Text size="sm">CAREER</Text>
          <Text size="sm">ARCHIVES</Text>
          <Text size="sm">LATESTS</Text>
        </VStack>
      </Box>

      <GridItem colStart={{ base: 3, md: -1 }} marginTop={{ base: 20, md: 0 }}>
        <MotionFlex
          justifyContent="center"
          alignItems="center"
          width={{ base: 20, mid: 32 }}
          height={{ base: 20, mid: 32 }}
          maxWidth={32}
          maxHeight={32}
          minWidth={20}
          minHeight={20}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
        >
          <Image
            src="/assets/circle.svg"
            htmlWidth="100%"
            htmlHeight="100%"
            alt="Hans Zimmer Eauropean Tour"
          />
        </MotionFlex>
      </GridItem>
    </MotionGrid>
  );
};

export default Header;
