import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, CssBaseline } from '@mui/material'; // Import Material-UI components
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider to apply theme

// Importing the page components
import HomePage from './components/HomePage/HomePage';
import FamilyTreePage from './components/FamilyTree/FamilyTreePage';
import ContactPage from './components/ContactPage/ContactPage';
import theme from './theme'; // Import your custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles from the theme */}
      <Router>
        <div className="App">
          {/* AppBar for navigation */}
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Family Tree Project
              </Typography>
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
          <Container>
            <Box sx={{ marginTop: 2 }}>
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
