// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component
import './styles/index.css';    // Optional: Import styles
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import theme from './theme';  // Import your custom theme

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  {/* Apply the theme globally */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')  // This matches the element in your public/index.html
);
