import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Home({ className, products }) {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [editModeIndex, setEditModeIndex] = useState(-1); // New state for edit mode

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

  const updateWeather = async (index) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherData[index].name},${weatherData[index].sys.country}&appid=${API_KEY}&units=metric`
      );

      const updatedWeatherData = [...weatherData];
      updatedWeatherData[index] = response.data;
      setWeatherData(updatedWeatherData);
      setEditModeIndex(-1); // Exit edit mode
    } catch (error) {
      console.error('Error updating weather:', error);
    }
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
            {editModeIndex === index ? (
              <div>
                {/* Input fields for editing */}
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={() => updateWeather(index)}>Save</button>
              </div>
            ) : (
              <div>
                {/* Display weather data */}
                <h2>
                  {weather.name}, {weather.sys.country}
                </h2>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Weather: {weather.weather[0].main}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Pressure: {weather.main.pressure} hPa</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
                <button onClick={() => deleteWeather(index)}>Delete</button>
                <button onClick={() => setEditModeIndex(index)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
}
export default styled(Home)`

  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  height: 100vh;
  background-color: #f0f0f0;


.topic {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

}

h1 {
  margin: 0;
}

input {
  padding: 5px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  
}

button:hover {
  background-color: #0056b8;
}

.playground-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.weather-card {
  width: 300px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.weather-card:hover {
  transform: translateY(-5px);
}

h2 {
  margin: 0;
}

p {
  margin: 5px 0;
}

button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #c82333;
}
`;
