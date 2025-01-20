import { createTheme } from "@mui/material/styles";

// Function to get design tokens based on the theme mode
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#101010" : "#f9f7f7", // Dark vs Light
      secondary: mode === "dark" ? "#040404" : "#fbfbfb", // Dark vs Light

    },
    secondary: { //used in the AppBar
      main: mode === "dark" ? "#202020" : "#dfdfdf", // Dark vs Light
    },
    auxilary: { //used in save and download buttons
      redText: mode === "dark" ? "#800000" : "#e60000", //
      redBackground: mode === "dark" ? "#2e0000" : "#ffc7c7", //
      greenText: mode === "dark" ? "#008000" : "#00e600", //
      greenBackground: mode === "dark" ? "#002e00" : "#c7ffc7", //
    },
    background: {
      default: mode === "dark" ? "rgba(0, 0, 0, 0)" : "#ff0000", // Transparent or light gray
      paper: mode === "dark" ? "#040404" : "#f9f7f7", // Dark or white
    },
    text: {
      primary: mode === "dark" ? "#ffffff" : "#000000", // White or black
      secondary: mode === "dark" ? "#dddddd" : "#222222", // Darker white or lighter black
    },
  },
  spacing: 8, // Default spacing unit for the theme
});

// Function to create the theme based on the current mode
const createAppTheme = (mode) => {
  const baseTheme = createTheme(getDesignTokens(mode));

  return createTheme(baseTheme, {
    typography: {
      fontFamily: "Verdana, Tahoma, Trebuchet MS, Arial, sans-serif",
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            padding: "8px 16px",
            color: baseTheme.palette.text.primary, // Dynamic text color
            backgroundColor: baseTheme.palette.primary.main, // Dynamic background
            "&:hover": {
              backgroundColor: baseTheme.palette.secondary.main, // Dynamic hover
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: baseTheme.palette.primary.main,   // Set background color to solid black
            boxShadow: "none",             // Remove box shadow
            backgroundImage: "none",      // Remove any background image (if set)
            backgroundRepeat: "no-repeat", // Ensure the background doesn't repeat
          },
        },
      },          
      MuiTypography: {
        styleOverrides: {
          root: {
            color: baseTheme.palette.text.primary, // Dynamic text color
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            paddingLeft: baseTheme.spacing(2), // Correct use of theme.spacing for padding
            paddingRight: baseTheme.spacing(2),
            "& .MuiButton-root": {
              marginLeft: baseTheme.spacing(1), // Correct use of theme.spacing for margin
              marginRight: baseTheme.spacing(1),
            },
          },
        },
      },
    },
  });
};

export default createAppTheme;