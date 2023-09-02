import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForecastData } from './actions';
import WeatherCard from './Forcast-card';
import styled from 'styled-components';
import backgroundImage from '../../assert/forest-sunrise-fog-5472x2834-10240.jpg';
import { useDispatch } from 'react-redux';

function Forecast({ forecast, className }) {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    useEffect(() => {
        const apiKey = 'bf998954d92cc264bd1a56bf70845d63';
        fetchForecastData(city, apiKey, dispatch);
    }, [city, fetchForecastData]);

    return (
        <div className={className}>

            <ForcastTitle>
                <h1>Weather App</h1>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <h1>5-Day Weather Forecast for {city}</h1>
                <div className="forecast-container">
                    {forecast && forecast.map((day, index) => (
                        <div className='playground-card'><WeatherCard key={index} day={day} /></div>
                    ))}

                </div>
            </ForcastTitle>
        </div>
    );
}

const mapStateToProps = (state) => ({
    forecast: state.weather.forecast,
    loading: state.weather.loading,
    error: state.weather.error,
});

const mapDispatchToProps = {
    fetchForecastData,
};

const ForcastTitle = styled.div` /* Fixed typo here */
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    input {
align-self: center;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

    h1 {
        color: white;
        font-size: 58px;
        text-align: center;
        padding-top: 50px;
        -webkit-text-stroke: 3px black;
    }

    p {
        font-size: small;
    }

    h2 {
        font-size: medium;
    }
    .forecast-container {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     flex-direction: row;
   
   }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
