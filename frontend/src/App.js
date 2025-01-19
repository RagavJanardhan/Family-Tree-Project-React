import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, CssBaseline } from '@mui/material'; // Import Material-UI components
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import createAppTheme from './theme'; // Import the dynamic theme function

// Importing the page components
import HomePage from './components/HomePage/HomePage';
import FamilyTreePage from './components/FamilyTree/FamilyTreePage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  // State to manage the theme mode
  const [mode, setMode] = useState('dark');
  // State to store the angle of the gradient
  const [angle, setAngle] = useState(205);

  useEffect(() => {
    // Set an interval to update the angle every 10ms
    const interval = setInterval(() => {
      setAngle(prevAngle => (prevAngle + 0.2) % 360); // Increment angle and reset at 360
    }, 10); // Update the angle every 10 milliseconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  // Function to toggle between light and dark modes
  const toggleMode = () => setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

  // Create the theme dynamically based on the current mode
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles from the theme */}
      <Router>
        <div
          className="App"
          style={{
            height: '100%', // Ensure the div takes up the full height of the viewport
            background: mode === 'dark' 
            ? `linear-gradient(${angle}deg, rgba(1, 1, 1, 1), rgba(3, 3, 3, .95))`  // Dark mode gradient
            : `linear-gradient(${angle}deg, rgba(255, 255, 255, 1), rgba(240, 240, 240, 1))`,  // Light mode gradient
          }}
        >
          {/* AppBar for navigation */}
          <AppBar position="static">
            <Toolbar>
              <Box display="flex" alignItems="center" sx={{ flexGrow: 1}}>
                {/* Logo/Image */}
                <img 
                  src="favicon.png" 
                  alt="" 
                  style={{ height: '40px', marginRight: '10px' }} 
                />
                {/* Title */}
                <Typography variant="h5">
                  Family Tree Project
                </Typography>
              </Box>
              <Button color="inherit" component={NavLink} to="/" end>
                Home
              </Button>
              <Button color="inherit" component={NavLink} to="/family-tree">
                Family Tree
              </Button>
              <Button color="inherit" component={NavLink} to="/contact">
                Contact
              </Button>
              <Button
                color="inherit"
                onClick={toggleMode} // Toggle light/dark mode
                sx={{ marginLeft: 'auto' }}
              >
                Toggle {mode === 'dark' ? 'Light' : 'Dark'} Mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* Main content container */}
          <Container sx={{
            maxWidth: '90vw',   // Set max-width to 90% of the viewport width
            '@media (min-width: 1200px)': { 
              maxWidth: '90vw'  // Ensures the max-width is 90vw even for large screens
            }
          }}>
            <Box sx={{ marginTop: 2, maxWidth: '90vw',}}>
              {/* Route setup */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/family-tree" element={<FamilyTreePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Box>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
