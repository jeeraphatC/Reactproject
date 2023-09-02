import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import backgroundImage from '../assert/col-de-la-madeleine-5400x3037-11343.jpg';


function About({className}) {
  return (
    <body className={className}>
      <div className='main'>
      <p>  5 </p>
      <p>'</p>
      
    <h1>Welcome to our Weather About Page!</h1>

    <p>At Weather App, we're passionate about providing you with accurate and up-to-date weather information. Weather plays a significant role in our daily lives, influencing everything from our clothing choices to our travel plans, outdoor activities, and more. Our mission is to keep you informed about the ever-changing atmospheric conditions so you can make well-informed decisions.</p>

    <h2>Why Trust Us?</h2>
    <p>We understand that reliable weather information is crucial, whether you're planning a weekend getaway, preparing for a special event, or simply deciding what to wear each day. Our team of dedicated meteorologists and weather enthusiasts work tirelessly to gather data from various sources, including satellite imagery, weather stations, and advanced forecasting models. We take pride in offering you accurate predictions and real-time updates to ensure you have the most precise weather details at your fingertips.</p>

    <h2>What We Offer:</h2>
    <ul>
        <li>Accurate Forecasts: Our forecasts are based on the latest technology and data analysis, ensuring that you receive accurate predictions for your location. We provide hourly, daily, and extended forecasts, so you can plan ahead with confidence.</li>
        <li>Interactive Maps: Explore interactive weather maps that offer a visual representation of temperature, precipitation, wind patterns, and more. Our maps are user-friendly and customizable, allowing you to zoom in on your area of interest.</li>
        <li>Severe Weather Alerts: Safety is our priority. We provide timely alerts for severe weather conditions, including thunderstorms, hurricanes, blizzards, and more. Stay informed and stay safe with our notifications.</li>
        <li>Educational Resources: We believe that understanding the weather enhances your overall experience. Our website features informative articles and resources about meteorological concepts, climate trends, and weather phenomena.</li>
        <li>Global Coverage: No matter where you are in the world, our website covers a wide range of locations, from bustling cities to remote rural areas. Get weather updates for your region, or explore weather conditions in places you're curious about.</li>
        <li>Community Engagement: Join our weather-loving community! Connect with fellow weather enthusiasts, share your weather-related experiences, and exchange tips for dealing with different weather scenarios.</li>
    </ul>

    <h2>Our Commitment:</h2>
    <p className='whites'>We are committed to excellence in delivering reliable weather information that empowers you to make informed decisions. Our dedication to accuracy, accessibility, and education drives us to continually improve and innovate our services. Weather is dynamic, and we're here to help you navigate its ever-changing patterns with confidence.</p>

    <p className='under'>Thank you for choosing Weather App as your trusted source for weather updates. Whether you're planning a picnic, scheduling a business trip, or simply curious about the world around you, we've got you covered. Stay tuned for the latest weather insights!</p>
</div>
</body>

  );
}

About.propTypes={
  className:PropTypes.string.isRequired
}
export default styled(About)`
/* About.css */
background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;

  }
 
  
  h1 {
    color: white;
    text-align: center;
    margin-top: 20px;
    -webkit-text-stroke: 1.5px black;
  }
  
  h2 {
    color: white;
    margin-top: 30px;
    -webkit-text-stroke: 1.5px black;
  }
  
  p {
    color: black;
    line-height: 1.5;
  }
  
  ul {
    list-style: disc;
    margin-left: 20px;
  }
  
  li {
    color:white;
    margin-bottom: 10px;
  }
  .main {
    margin: 10px 100px 100px 100px;
  }
  /* Add more CSS styles as needed */
  .under{
    color:white;
    padding-bottom: 200px;
  }
  .whites{
    color:white;
  }
`;

