import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './features/redux-feature/store'; // Import your Redux store
import App from './App';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
