import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
    primary: {
      main: "#f7f8f8", 
    },
    secondary: {
      main: "#e6e6e6",
    },
    background: {
      default: "rgba(0, 0, 0, 0)", // Transparent background
      paper: "#010101", // Slightly lighter paper background for better contrast
    },
    text: {
      primary: "#ffffff", // White text for primary text
      secondary: "#e0e0e0", // Lighter secondary text for better contrast
    },
  },
  typography: {
    fontFamily: "Verdana, Tahoma, Trebuchet MS, Arial, sans-serif",
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
          backgroundColor: "#101010", // Match primary color for buttons
          "&:hover": {
            backgroundColor: "#202020", // Darker hover for primary button
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#010101", // Darker AppBar background
          boxShadow: "none", // No shadow for the AppBar
          backgroundImage: "none", // Override any background image
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
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '& .MuiButton-root': {
            marginLeft: '8px',
            marginRight: '8px',
          },
        },
      },
    },
  },
  spacing: 8, // Sets default spacing unit to 8px
});

export default theme;
