import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import { Route, Routes } from 'react-router-dom'; 
import HomePage from './features/Homepage'; 
import Map from './features/Map';
import Forecast from './features/Forecast';
import About from './features/about';

function App() {
  return (
    
    <>
      <GlobalStyle />
      <Navbar />
      <Container>   
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={<HomePage />} /> 
            <Route path="/Current-weather" element={<Home />} />
            <Route path="/Forecast" element={<Forecast/>} />
            <Route path="/Map-weather" element={<Map/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
      </Container>
      
      
    </>
  );
}

export default App;