import { Grid, GridItem } from '@chakra-ui/react';
import { MotionHeading, MotionText } from '@components/index';

const TopHeading = () => (
  <Grid
    templateColumns="1fr 1fr"
    templateRows="repeat(2, auto)"
    marginTop={24}
    marginBottom={40}
  >
    <GridItem colSpan={2}>
      <MotionHeading size="lg">NOMINATION</MotionHeading>
    </GridItem>

    <GridItem colStart={2} rowStart={2}>
      <MotionHeading size="lg">ARCHIVE</MotionHeading>
    </GridItem>
    <GridItem colStart={1} rowStart={2} justifySelf="center" alignSelf="end">
      <MotionText>RECOGNITION FOR</MotionText>
      <MotionText>HANS ZIMMER</MotionText>
      <MotionText>(SELECTION)</MotionText>
    </GridItem>
  </Grid>
);

export default TopHeading;
