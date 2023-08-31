import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Home({className}) {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = 'bf998954d92cc264bd1a56bf70845d63';


  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData([...weatherData, response.data]);
      setCity('');
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const deleteWeather = (index) => {
    const updatedWeatherData = [...weatherData];
    updatedWeatherData.splice(index, 1);
    setWeatherData(updatedWeatherData);
  };

  return (
    <div className={className}>
      <div className='topic'>
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      <button onClick={fetchWeather}>Get Weather</button>
      </div>
      <div className='playground-card'>
        {weatherData.map((weather, index) => (
          <div key={index} className="weather-card">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <button onClick={() => deleteWeather(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Home)`

  position: relative;
  display: flex;
  flex-direction: column;


.topic {
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 20;
}

input{
  align-self: center;
  width: 150px;
  height: 50px;
}

button{
  align-self: center;
  width: 150px;
}
.Home {
  width: 100%;
  margin-top: 4%;
  text-align: center;
  display: flex;
  flex-direction: column;


}
.playground-card {
  width: 1440px;
  height: auto;
  align-self: center;
  display: flex;
  display: inline-block;
  flex-direction: row;
}

.weather-card {
  display: inline-block;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
}
`;