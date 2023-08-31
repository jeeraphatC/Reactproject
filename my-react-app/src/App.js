import React, { useState } from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import { Route, Routes } from 'react-router-dom'; 
import HomePage from './features/Homepage'; 

function App() {
  const [weatherData, setWeatherData] = useState([]);
  return (
    
    <>
      <GlobalStyle />
      <Navbar />
      <Container>   
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/Hompage" element={<HomePage />} /> 
            <Route path="/Current-weather" element={<Home />} />

          </Routes>
      </Container>
    </>
  );
}

export default App;