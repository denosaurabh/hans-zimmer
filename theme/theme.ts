import { extendTheme } from '@chakra-ui/react';

import Heading from '@theme/heading';
import Text from '@theme/text';

const theme = extendTheme({
  components: {
    Heading,
    Text
  },
  colors: {
    grey: {
      light: '#E4E4E4',
      medium: '#B9B9B9',
      dark: '#111111'
    }
  },
  fonts: {
    heading: 'Cosi Times Light Condensed',
    body: "'Poppins', sans-serif",
    serif: "'Playfair Display', serif"
  },
  styles: {
    global: {
      'html, body': {
        height: 'min-content',
        backgroundColor: 'black',
        color: 'white'
      },
      '.header, .scroll-container': {
        padding: '50px 8%'
      },
      body: {
        overscrollBehaviorY: 'none',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased'
      },
      '::selection': {
        color: 'grey.light',
        background: 'grey.dark'
      }
    }
  }
});

export default theme;
