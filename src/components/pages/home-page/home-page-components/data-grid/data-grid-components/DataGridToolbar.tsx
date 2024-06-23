import { ThemeProvider, createTheme } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import theme from "../../../../../../config/theme/AppTheme";

const PADDING_SIZE = "15px";

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
});

const DataGridToolbar: React.FC = () => {
  
  return (
    <GridToolbarContainer
      sx={{
        bgcolor: theme.palette.black.dark,
        borderBottom: "1px solid #E0E0E0",
        borderRadius: `${PADDING_SIZE} ${PADDING_SIZE} 0px 0px`,
        paddingLeft: PADDING_SIZE,
      }}
    >
      <ThemeProvider theme={toolbarTheme}>
        <GridToolbarDensitySelector />
      </ThemeProvider>
    </GridToolbarContainer>
  );
};

export default DataGridToolbar;
