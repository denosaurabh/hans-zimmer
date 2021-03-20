import { Grid, GridItem } from '@chakra-ui/react';
import { MotionHeading, MotionText } from '@components/index';

const TopHeading = () => (
  <Grid
    templateColumns="1fr 1fr"
    templateRows="repeat(2, auto)"
    marginBottom={16}
  >
    <MotionHeading size="lg">HANS</MotionHeading>

    <GridItem colStart={2} rowStart={2}>
      <MotionHeading size="lg">ZIMMER</MotionHeading>
    </GridItem>
    <GridItem colStart={1} rowStart={2} justifySelf="center" alignSelf="end">
      <MotionText>A GERMAN BORN FILM</MotionText>
      <MotionText>SCORE COMPOSER AND</MotionText>
      <MotionText>RECORD PRODUCER</MotionText>
    </GridItem>
  </Grid>
);

export default TopHeading;
