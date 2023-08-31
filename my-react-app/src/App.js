import React from 'react';
import Navbar from './features/Navbar';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import { Route, Routes } from 'react-router-dom'; 
import HomePage from './features/Homepage'; 
import Forecast from './features/Forecast';
function App() {
  return (
    
    <>
      <GlobalStyle />
      <Navbar />
      <Container>   
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/Hompage" element={<HomePage />} /> 
            <Route path="/Current-weather" element={<Home />} />
            <Route path="/Forecast" element={<Forecast/>} />
          </Routes>
      </Container>
      
      
    </>
  );
}

export default App;