import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './styles/index.css'; // Optional: Import styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the root element in public/index.html
);
