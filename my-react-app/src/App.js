import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
      <Home/>       
    </>
  );
}

export default App;
