import React from 'react';
import ReactDOM from 'react-dom';
/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
