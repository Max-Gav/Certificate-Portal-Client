import { Box, ThemeProvider } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";
import { whiteToolbarButtons } from "../DataGridToolbarTheme";

const ToolbarGridOptions: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={whiteToolbarButtons}>
        <GridToolbarDensitySelector />
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </ThemeProvider>
    </Box>
  );
};

export default ToolbarGridOptions;
