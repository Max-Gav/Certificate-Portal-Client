import { Box, ThemeProvider } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";
import { whiteToolbarButtonsTheme } from "../DataGridToolbarTheme";

const ToolbarGridOptions: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={whiteToolbarButtonsTheme}>
        <GridToolbarDensitySelector />
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </ThemeProvider>
    </Box>
  );
};

export default ToolbarGridOptions;
