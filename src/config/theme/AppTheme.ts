import { createTheme } from "@mui/material/styles";


declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
    black: Palette["primary"];
    orange: Palette["primary"];
  }

  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    black: true;
  }
}

declare module "@mui/material/Link"{
  interface TypographyPropsColorOverrides {
    black: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    gray: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    orange: true;
    black: true;
  }
}

let theme = createTheme({})

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bolder",
          borderRadius: "15px",
        },
      },
    },
    MuiDataGrid:{
      styleOverrides: {
        root: {
          '& .MuiDataGrid-columnHeaderTitle css-t89xny-MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
            backgroundColor:"red"
          },
        },
        row: {
          "&.Mui-selected": {
            backgroundColor: "#7CB9E8",
            "&:hover": {
              backgroundColor: "#6CB4EE"
            }
          }
        }
      }
    }
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Arial", sans-serif',
  },
  palette: {
    error: theme.palette.augmentColor({
      color: {
        main: '#C62828',
      },
      name: 'error',
    }),
    gray: theme.palette.augmentColor({
      color: {
        main: "#EEEEEE",
      },
      name: 'gray',
    }),
    black: theme.palette.augmentColor({
      color: {
        light: "#343434",
        main: "#28282B",
        dark:"#000000",
        contrastText:"white"
      },
      name: 'black',
    }),
    orange: theme.palette.augmentColor({
      color: {
        main: '#DC5F00',
        contrastText:"white"
      },
      name: 'orange',
    }),

  },
});

export default theme;
