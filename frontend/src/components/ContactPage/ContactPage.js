import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material'; // Import Material-UI components

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container>
        <Box sx={{ marginTop: 2 }}>
          {/* Contact Page Title */}
          <Typography variant="h3" color="primary" gutterBottom>
            Contact Information
          </Typography>

          {/* Description */}
          <Typography variant="body1" color="textSecondary" paragraph>
            If you have any questions, feel free to reach out to us!
          </Typography>

          {/* Contact details */}
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="body1">
              <strong>Email:</strong> info@familytree.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +123456789
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
