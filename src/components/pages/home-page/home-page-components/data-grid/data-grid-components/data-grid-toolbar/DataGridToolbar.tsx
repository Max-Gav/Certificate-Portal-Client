import { Box, ThemeProvider, Typography } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarProps,
  ToolbarPropsOverrides,
} from "@mui/x-data-grid";
import React from "react";
import styles from "./DataGridToolbar.module.css";
import { toolbarTheme } from "./DataGridToolbarTheme";
import ToolbarGridOptions from "./data-grid-toolbar-components/ToolbarGridOptions";
import ToolbarButtonsMenu from "./data-grid-toolbar-components/ToolbarButtonsMenu";
import { APP_NAME } from "../../../../../../../common/constants";

const DataGridToolbar: React.FC<GridToolbarProps & ToolbarPropsOverrides> = ({
  extendTools,
}) => {
  return (
    <GridToolbarContainer className={styles.toolbarContainer}>
      <ThemeProvider theme={toolbarTheme}>
        <Box className={styles.toolbarLeftside}>
          <Typography className={styles.toolbarTitle}>{APP_NAME}</Typography>
          <ToolbarButtonsMenu extendTools={extendTools} />
        </Box>
        <ToolbarGridOptions />
      </ThemeProvider>
    </GridToolbarContainer>
  );
};

export default DataGridToolbar;
