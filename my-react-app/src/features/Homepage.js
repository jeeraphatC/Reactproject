import React from 'react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4; /* Set your desired background color */
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333; /* Set your desired text color */
`;

const WeatherInfo = styled.div`
  font-size: 24px;
  text-align: center;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <WelcomeMessage>Welcome to Our Weather App</WelcomeMessage>
      <WeatherInfo>
        <p>This web-site make for show weatherData</p>
      </WeatherInfo>
    </StyledHomePage>
  );
}

export default HomePage;
