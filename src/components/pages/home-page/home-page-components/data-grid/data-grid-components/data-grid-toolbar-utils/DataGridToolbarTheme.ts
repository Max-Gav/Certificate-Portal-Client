import { createTheme } from "@mui/material";
import theme from "../../../../../../../config/theme/AppTheme";

declare module "@mui/material/styles" {
    interface Palette {
      white: Palette["primary"];
    }
  
    interface PaletteOptions {
      white?: PaletteOptions["primary"];
    }
  }
  
  declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
      white: true;
    }
  }
  
  const whiteToolbarButtons = createTheme({
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              color: "white",
            },
          },
        },
      },
  })
  
  let toolbarTheme = createTheme({});
  
  toolbarTheme = createTheme(toolbarTheme, {
    palette: {
      primary: theme.palette.augmentColor({
        color: {
          main: "#5DADE2",
          contrastText: "black",
        },
        name: "primary",
      }),
      secondary: theme.palette.augmentColor({
        color: {
          main: "#F39C12",
          contrastText: "white",
        },
        name: "secondary",
      }),
      success: theme.palette.augmentColor({
        color: {
          main: "#2ECC71",
          contrastText: "white",
        },
        name: "success",
      }),
      error: theme.palette.augmentColor({
        color: {
          main: "#E74C3C",
          contrastText: "white",
        },
        name: "error",
      }),
      white: theme.palette.augmentColor({
        color: {
          main: "#FFFFFF",
        },
        name: "white",
      }),
    },
  });


  export {whiteToolbarButtons, toolbarTheme}