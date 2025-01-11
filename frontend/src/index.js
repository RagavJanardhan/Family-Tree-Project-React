// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component
import './index.css';    // Optional: Import styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This matches the element in your public/index.html
);
