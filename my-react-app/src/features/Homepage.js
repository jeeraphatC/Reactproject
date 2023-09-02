import React , {useEffect}from 'react';
import styled from 'styled-components';
import backgroundImage from '../assert/sunset-mountain-range-silhouette-landscape-orange-sky-6000x4000-4928.jpg';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
  
`;

const WelcomeMessage = styled.h1`
  font-size: 50px;
  
  margin-bottom: 1px;
  color: white; 
  body, html {
  margin: 0;
  height: 100%;
  text-align: center;
  font-family: 'Oxygen Mono', monospace;
  color: #999;
}

h1 {
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-size: 30pt;
  margin-bottom: 1px;
  padding-top: 20px;
  color: white;
}

p {
  text-align: left;
  margin: 0;
  text-transform: lowercase;
  font-size: 10pt;
  font-weight: 900;
  width: 50%;
  display: none;
}
`;


const WeatherInfo = styled.div`
  font-size: 24px;
  text-align: center;
  color: wheat; 
`;

function HomePage() {

  useEffect(() => {
    const typeEffect = (element, text, speed) => {
      let i = 0;

      function typeCharacter() {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1);
          i++;
          setTimeout(typeCharacter, speed);
        }
      }

      typeCharacter();
    };

    const speed = 75;
    const h1 = document.querySelector('.typing-title');
    const p = document.querySelector('.typing-message');
   

    // Clear existing content
    h1.innerHTML = '';
    p.style.display = 'none';

    // Type effect for the title
    setTimeout(() => {
      typeEffect(h1, 'Welcome To Weather App', speed);
    }, speed);

    // Type effect for the message
    setTimeout(() => {
      p.style.display = 'inline-block';
      typeEffect(p, 'This web-site make for show weatherData', speed);
    }, );
  }, []);
  return (
    <StyledHomePage>
      <WelcomeMessage>
      <h1 className="typing-title"></h1>
      </WelcomeMessage>
      <WeatherInfo>
      <p className="typing-message"></p>
      </WeatherInfo>
    </StyledHomePage>
  );
}

export default HomePage;
