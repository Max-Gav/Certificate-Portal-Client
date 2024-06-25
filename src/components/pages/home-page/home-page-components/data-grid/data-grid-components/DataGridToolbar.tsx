import {
  ThemeProvider,
  Typography,
  createTheme,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import theme from "../../../../../../config/theme/AppTheme";
import { APP_NAME } from "../../../../../../common/constant";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

const PADDING_SIZE = "15px";

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
    white: true
  }
}

let toolbarTheme = createTheme({});

toolbarTheme = createTheme(toolbarTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white"
        },
      },
    },
  },
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#5DADE2",
        contrastText: "white",
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
      color:{
        main: "#FFFFFF",
      },
      name:"white",
    })
  },
});

const DataGridToolbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <GridToolbarContainer
      sx={{
        color: "white",
        bgcolor: theme.palette.black.dark,
        borderRadius: `${PADDING_SIZE} ${PADDING_SIZE} 0px 0px`,
        paddingLeft: PADDING_SIZE,
        paddingTop: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={toolbarTheme}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            fontWeight={"bold"}
            paddingRight={"20px"}
            paddingY={"5px"}
          >
            {APP_NAME}
          </Typography>
          <Collapse in={isMenuOpen} orientation="horizontal">
            <Box
              sx={{
                bgcolor: theme.palette.black.light,
                borderRadius: "5px",
                margin: "3px",
                display: "flex",
                gap: "1",
              }}
            >
              <IconButton color="success" size="small">
                <AddIcon fontSize="small" />
              </IconButton>
              <IconButton color="secondary" size="small">
                <FileUploadIcon fontSize="small" />
              </IconButton>
              <IconButton color="primary" size="small">
                <ModeEditIcon fontSize="small" />
              </IconButton>
              <IconButton color="error" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Collapse>
          <IconButton
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
            color="white"
          >
            {isMenuOpen ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </IconButton>
        </Box>
        <Box>
          <GridToolbarDensitySelector />
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
        </Box>
      </ThemeProvider>
    </GridToolbarContainer>
  );
};

export default DataGridToolbar;
