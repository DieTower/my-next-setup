// import Head from 'next/head'
// import Image from 'next/image'

import { Flex, Grid, GridItem } from "@chakra-ui/layout";

const Home = () => {
  
  return (
    <div>
      <h1>Hello Friend</h1>
      <Grid
        w="200px"
        h="100px"
        bgColor="red"
        templateColumns="1fr 1fr"
        templateRows="1fr 1fr">
        
        <GridItem rowSpan={2} bgColor="blue">
          
        </GridItem>
        
        <GridItem rowSpan={2} bgColor="pink">
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gridGap={4}>
            
            <h1>Hello1</h1>
            <h2>Hello2</h2>
            
          </Flex>
        </GridItem>
      </Grid>
    </div>
  )
}

export default Home;