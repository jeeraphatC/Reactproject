// src/reducers/weatherReducer.js
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchForecastRequest,
  fetchForecastSuccess,
  fetchForecastFailure,
} from './actions'; // Import the action creators

const initialState = {
  forecast: [],
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [fetchForecastRequest]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchForecastSuccess]: (state, action) => {
    state.forecast = action.payload;
    state.loading = false;
  },
  [fetchForecastFailure]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
