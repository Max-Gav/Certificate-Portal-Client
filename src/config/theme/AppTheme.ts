import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bolder",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#DC5F00",
    },
    secondary: {
      main: "#373A40",
    },
    error: {
      main: "#B80000",
    },
    warning: {
      main: "#F97300",
    },
    info: {
      main: "#EEEEEE",
    },
    success: {
      main: "#41B06E",
    },
  },
});

export default theme;
