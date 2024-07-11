import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Collapse,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarProps,
  ToolbarPropsOverrides,
} from "@mui/x-data-grid";
import React from "react";
import { APP_NAME } from "../../../../../../common/constant";
import theme from "../../../../../../config/theme/AppTheme";
import AddCertificateButton from "./data-grid-toolbar-utils/AddCertificateButton";
import CreateCertificateButton from "./data-grid-toolbar-utils/CreateCertificateButton";
import {
  whiteToolbarButtons,
  toolbarTheme,
} from "./data-grid-toolbar-utils/DataGridToolbarTheme";
import EditCertificateButton from "./data-grid-toolbar-utils/EditCertificateButton";

const PADDING_SIZE = "15px";

const DataGridToolbar: React.FC<GridToolbarProps & ToolbarPropsOverrides> = ({
  extendTools,
}: GridToolbarProps & ToolbarPropsOverrides) => {
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
              <CreateCertificateButton />
              <AddCertificateButton />
              {extendTools && (
                <>
                  <EditCertificateButton/>
                  <IconButton color="error" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </>
              )}
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
          <ThemeProvider theme={whiteToolbarButtons}>
            <GridToolbarDensitySelector />
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
          </ThemeProvider>
        </Box>
      </ThemeProvider>
    </GridToolbarContainer>
  );
};

export default DataGridToolbar;
