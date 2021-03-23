import { VStack, Box, Text } from '@chakra-ui/react';

import { Logo, MotionGrid, MotionCircle, MotionFlex } from '@components';

const Header = () => {
  const array = 'Hans Zimmer European Tour 2021'.split('');

  const deg = 360 / array.length;
  const origin = 0;

  const radius = 50;

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
      <Box display={{ base: 'hidden', md: 'unset' }}>
        <VStack alignItems="left" spacing={2}>
          <Text fontWeight="" size="sm">
            DISCOGRAPHY
          </Text>
          <Text size="sm">TEAM</Text>
          <Text size="sm"></Text>
          <Text size="sm"></Text>
          <Text size="sm"></Text>
        </VStack>
      </Box>
      <Box display={{ base: 'hidden', md: 'unset' }}>
        <VStack alignItems="left" spacing={2}>
          <Text size="sm">BIOGRAPHY</Text>
          <Text size="sm">MEDIA</Text>
          <Text size="sm">ARCHIVES</Text>
          <Text size="sm">NEWS</Text>
        </VStack>
      </Box>

      <MotionCircle
        position="relative"
        width={120}
        height={120}
        bg="grey.light"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
      >
        <svg height="100" width="100">
          <circle id="circle" cx="50" cy="50" r="40" />

          <text
            style={{ color: 'white' }}
            x="25"
            fontFamily="serif"
            fontWeight="medium"
            fontSize="sm"
            color="grey.dark"
          >
            <textPath xlinkHref="#circle">
              Hans Zimmer European Tour 2021
            </textPath>
          </text>
        </svg>
        {/* {'Hans Zimmer European Tour 2021'.split('').map((el, i, arr) => {
          origin += deg;

          return (
            <Text
              sx={{
                height: radius + 'px',
                position: 'absolute',
                transform: `rotate(${origin}deg)`,
                transformOrigin: '0 100%'
              }}
              display="inline-block"
              fontFamily="serif"
              fontWeight="medium"
              fontSize="sm"
              color="grey.dark"
              key={i}
            >
              {el == ' ' ? '\xa0' : el}
            </Text>
          );
        })} */}
      </MotionCircle>
    </MotionGrid>
  );
};

export default Header;
