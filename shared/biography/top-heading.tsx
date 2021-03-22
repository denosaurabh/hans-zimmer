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
      <MotionHeading size="lg">BIOGRAPHY</MotionHeading>
    </GridItem>

    <GridItem colStart={2} rowStart={2}>
      <MotionHeading size="lg">ARTIST</MotionHeading>
    </GridItem>
    <GridItem colStart={1} rowStart={2} justifySelf="center" alignSelf="end">
      <MotionText>MORE THAN 200</MotionText>
      <MotionText>PROJECTS ACROSS ALL</MotionText>
      <MotionText>MEDIUMS</MotionText>
    </GridItem>
  </Grid>
);

export default TopHeading;
