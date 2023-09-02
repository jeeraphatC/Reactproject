import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assert/logo.png';
function Navbar({ className }) {
  return (

    <header className={className}>
     
       
     
      <Link to="/" className='navbar-logo'><img src={logo} alt="Company Logo" /></Link>
      <Link to="/" className='B'>Homepage</Link>
      <Link to="/Current-weather" className='B'>Current Weather</Link>
      <Link to="/Forecast " className='B'>Forecast</Link>
      <Link to="/Map-weather " className='B'>Map</Link>
      <Link to="/about" className='B'>About</Link>
    


    </header>

  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Navbar)`
 
 height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  top :0;
  padding: 2rem;
  position: fixed;
  z-index: 100;

  .B{
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
  }
  .B:hover {
    background-color: black;
    color: white;
  }

  .navbar-logo img {
    margin-top: 5px;
  width: 100px; 
  height: 55px;
 
}
  
`;
