import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    grey: {
      light: '#E4E4E4',
      medium: '#B9B9B9',
      dark: '#111111',
    },
  },
  fonts: {
    heading: "'Cosi Times', serif",
    body: "'Poppins', sans-serif"
}
});

export default theme;
