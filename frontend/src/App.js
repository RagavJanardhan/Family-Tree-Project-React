import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, CssBaseline } from '@mui/material'; // Import Material-UI components
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider to apply theme
import { useState, useEffect } from 'react';

// Importing the page components
import HomePage from './components/HomePage/HomePage';
import FamilyTreePage from './components/FamilyTree/FamilyTreePage';
import ContactPage from './components/ContactPage/ContactPage';
import theme from './theme'; // Import your custom theme

function App() {
  // State to store the angle of the gradient
  const [angle, setAngle] = useState(205);

  useEffect(() => {
    // Set an interval to update the angle every 10ms
    const interval = setInterval(() => {
      setAngle(prevAngle => (prevAngle + .2) % 360); // Increment angle and reset at 360
    }, 10); // Update the angle every 10 milliseconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles from the theme */}
      <Router>
        <div
        className="App"
        style={{
          height: '100%', // Ensure the div takes up the full height of the viewport
          //background: `linear-gradient(${angle}deg, rgb(0 0 0 / 80%), rgb(255 255 255 / 80%))`, // Apply dynamic gradient
          background: `linear-gradient(${angle}deg, rgb(63 65 194 / 80%), rgb(104 14 14 / 80%))`, // Apply dynamic gradient
          transition: 'background 0.1s ease', // Smooth transition for the background change
        }}
        >
          {/* AppBar for navigation */}
          <AppBar position="static">
            <Toolbar 
              sx={{ 
                background: 'linear-gradient(rgba(255, 255, 255, 0.082), rgba(255, 255, 255, 0.082))', // Paper overlay effect
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)', // Custom shadow
              }}>
              {/* Add a Box to align the logo and text */}
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
