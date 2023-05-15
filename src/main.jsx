/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

// eslint-disable-next-line import/order

import { Provider } from 'react-redux';
import { Store } from './features/Store';
// import { Store } from './Features/Store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={Store}>
    <BrowserRouter>

    <App />

    </BrowserRouter>

    </Provider>

  </React.StrictMode>
);
