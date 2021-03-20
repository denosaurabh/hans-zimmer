const Heading = {
  baseStyle: {
    fontFamiky: 'heading',
    fontWeight: 'light',
    display: 'flex'
  },
  sizes: {
    lg: {
      fontSize: ['98px', '128px', '168px'],
      lineHeight: '90%'
    },
    md: {
      fontSize: '7xl'
    },
    sm: {
      fontSize: '5xl'
    }
  },
  defaultProps: {
    size: 'md'
  }
};

export default Heading;
