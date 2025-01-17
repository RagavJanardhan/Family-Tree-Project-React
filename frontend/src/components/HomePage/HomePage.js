import React from 'react';
import { ReactTyped } from "react-typed";import { Typography, Paper } from '@mui/material';  // Import Material-UI components

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'flex-start',  // Align items at the top of the viewport
        height: '100vh',  // Full viewport height
        textAlign: 'center',
        marginTop: '50px',  // Add space above the Paper element
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          width: '95vw',  // Paper takes up almost the full width of the viewport
          height: '80vh',  // Set the Paper height to 80% of the viewport height
          display: 'flex', // Enable Flexbox within Paper
          flexDirection: 'column', // Stack text vertically
          justifyContent: 'center', // Vertically center content within the Paper
        }}
      >
        {/* Use Typing component for the typing effect */}
        <ReactTyped
          strings={["Welcome to the Family Tree Project"]}
          typeSpeed={50} // Type twice as fast (50ms between each character)
          backSpeed={0} // Prevent erasing (set backSpeed to 0)
          backDelay={0} // Prevent delay before erasing (set backDelay to 0)
          loop={false} // Prevent the typing animation from looping
          showCursor={false} // Hide the cursor after typing finishes
          style={{ fontSize: '1.5em' }} // Increase text size (twice as big)
        />
        
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
