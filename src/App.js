import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Container,
  theme,
} from '@chakra-ui/react';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Feed from './components/feed/Feed';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="90vh" p={3}>
          <Container maxW='container.xl'>
            <Feed />
          </Container>
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
