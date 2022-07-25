import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {ConnectionProvider} from './context/connectionContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConnectionProvider>
          <App />
      </ConnectionProvider>
    </BrowserRouter>
  </React.StrictMode>
);

