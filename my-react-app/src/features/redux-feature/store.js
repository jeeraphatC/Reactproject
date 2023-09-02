import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducer';

export default configureStore({
  reducer: {
    weather: weatherReducer 
  }
});