import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material'; // Import Material-UI components
import FamilyTree from './FamilyTree'; // Import the FamilyTree component

const FamilyTreePage = () => {
  return (
    <div className="family-tree-page">
      <Container>
        <Box sx={{ marginTop: 2 }}>
          {/* Family Tree Page Title */}
          <Typography variant="h3" color="primary" gutterBottom>
            Family Tree Visualization
          </Typography>

          {/* Description */}
          <Typography variant="body1" color="textSecondary" paragraph>
            Here you can view the family tree and its relationships.
          </Typography>

          {/* Family Tree component wrapped in a Paper component */}
          <Paper elevation={3} sx={{ padding: 1, width: '100%' }}>
            <FamilyTree />
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default FamilyTreePage;
