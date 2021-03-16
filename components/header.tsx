import { VStack, Text, Circle } from '@chakra-ui/react';
import MotionGrid from '@components/motion/grid';
import Logo from '@components/logo';

const Header = () => {
  return (
    <MotionGrid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.4 }}
      gridTemplateColumns="50% 1fr 1fr 1fr"
      alignItems="start"
    >
      <Logo />

      <VStack alignItems="left" spacing={2}>
        <Text fontWeight="200">DISCOGRAPHY</Text>
        <Text fontWeight="200">TEAM</Text>
        <Text fontWeight="200"></Text>
        <Text fontWeight="200"></Text>
        <Text fontWeight="200"></Text>
      </VStack>
      <VStack alignItems="left" spacing={2}>
        <Text fontWeight="200">BIOGRAPHY</Text>
        <Text fontWeight="200">MEDIA</Text>
        <Text fontWeight="200">ARCHIVES</Text>
        <Text fontWeight="200">NEWS</Text>
      </VStack>

      <Circle size={120} bg="grey.light">
        <Text fontFamily="serif" color="grey.dark">
          Hans Zimmer European Tour 2021
        </Text>
      </Circle>
    </MotionGrid>
  );
};

export default Header;
