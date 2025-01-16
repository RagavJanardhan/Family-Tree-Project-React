import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
    primary: {
      main: "#1e88e5", // Softer, darker blue for better contrast (was #1976d2)
    },
    secondary: {
      main: "#f50057", // A bit softer pink (was #ff4081)
    },
    background: {
      default: "#121212", // Dark background color for the app
      paper: "#212121", // Slightly lighter paper background for better contrast
    },
    text: {
      primary: "#ffffff", // White text for primary text
      secondary: "#e0e0e0", // Lighter secondary text for better contrast
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#ffffff", // Ensure header text is white for contrast
    },
    h2: {
      fontWeight: 600,
      color: "#ffffff", // Ensuring h2 is white too
    },
    body1: {
      fontSize: "1rem",
      color: "#e0e0e0", // Slightly lighter body text
    },
    body2: {
      fontSize: "0.875rem",
      color: "#e0e0e0", // Same as body1
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
          color: "#ffffff", // Button text color
          backgroundColor: "#1e88e5", // Match primary color for buttons
          "&:hover": {
            backgroundColor: "#1565c0", // Darker hover for primary button
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#333333", // Darker AppBar background
          boxShadow: "none", // No shadow for the AppBar
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Default text color is white for all Typography
        },
      },
    },
  },
  spacing: 8, // Sets default spacing unit to 8px
});

export default theme;
