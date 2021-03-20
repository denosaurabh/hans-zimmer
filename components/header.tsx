import { VStack, Text } from '@chakra-ui/react';

import MotionGrid from '@components/motion/grid';
import Logo from '@components/logo';
import MotionCircle from '@components/motion/circle';

const Header = () => {
  return (
    <MotionGrid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 2 }}
      gridTemplateColumns="50% 1fr 1fr 1fr"
      alignItems="start"
    >
      <Logo />

      <VStack alignItems="left" spacing={2}>
        <Text size="sm">DISCOGRAPHY</Text>
        <Text size="sm">TEAM</Text>
        <Text size="sm"></Text>
        <Text size="sm"></Text>
        <Text size="sm"></Text>
      </VStack>
      <VStack alignItems="left" spacing={2}>
        <Text size="sm">BIOGRAPHY</Text>
        <Text size="sm">MEDIA</Text>
        <Text size="sm">ARCHIVES</Text>
        <Text size="sm">NEWS</Text>
      </VStack>

      <MotionCircle
        size={120}
        bg="grey.light"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
      >
        <Text fontFamily="serif" color="grey.dark">
          Hans Zimmer European Tour 2021
        </Text>
      </MotionCircle>
    </MotionGrid>
  );
};

export default Header;
