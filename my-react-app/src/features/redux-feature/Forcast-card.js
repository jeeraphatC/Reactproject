// src/components/WeatherCard.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function WeatherCard({ day, className }) {
    const date = new Date(day.dt * 1000.); // Convert timestamp to date
    const temperatureKelvin = day.main.temp;
    const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
    const weatherDescription = day.weather[0].description;

    return (
        
        <div className={className}>
            
            <div className='playground-card'>
            <div className="weather-card">
                <h2>Date: {date.toLocaleDateString()}</h2>
                <p>Time : {date.toLocaleTimeString()}</p>
                <p>Temperature: {temperatureCelsius}°C</p>
                <p>Weather: {weatherDescription}</p>
            </div>
            </div>
        </div>
    );
}

WeatherCard.propTypes = {
  className: PropTypes.string.isRequired,
  day: PropTypes.object.isRequired,
}

export default styled(WeatherCard)`
  
  
    display: flex;
    flex-direction: column;
    align-self: center;
    flex-wrap: wrap;
   


  .playground-card {
    
   margin-left: 57.5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
  }
  
  .topic {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2px;
    color: white;
    font-size: 42px;
    -webkit-text-stroke: 3px black;
  }
  
  .weather-card {
    width: 300px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    margin: 10px;
  }

  
  
  .weather-card:hover {
    transform: translateY(-5px);
    box-shadow: 1px 1px 2px black, 0 0 25px white, 0 0 5px yellow;
  }
  
  h2 {
    margin: 0;
  }
  
  p {
    margin: 5px 0;
  }
  `;
