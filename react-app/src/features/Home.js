import React, { useState } from 'react';
import axios from 'axios';

function Home() {
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
    <div className="Home">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
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

export default Home;