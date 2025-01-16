import React from 'react';
import { Typography, Paper } from '@mui/material';  // Import Material-UI components

const HomePage = () => {
  return (
    <div className="homepage">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to the Family Tree Project
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          This is a simple React app for visualizing family trees.
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          Instructions:
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Use the navigation bar to view the family tree or contact information.
        </Typography>
      </Paper>
    </div>
  );
};

export default HomePage;
