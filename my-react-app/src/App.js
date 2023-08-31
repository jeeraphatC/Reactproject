import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
