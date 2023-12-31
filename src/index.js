import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.scss'
import App from './Routes';
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
