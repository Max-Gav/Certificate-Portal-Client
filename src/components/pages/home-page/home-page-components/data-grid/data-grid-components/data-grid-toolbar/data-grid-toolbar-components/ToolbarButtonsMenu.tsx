import { Box, Collapse, Typography } from "@mui/material";
import React from "react";
import { APP_NAME } from "../../../../../../../../common/constants";
import theme from "../../../../../../../../config/theme/AppTheme";
import CreateCertificateButton from "./CreateCertificateButton";
import AddCertificateButton from "./AddCertificateButton";
import EditCertificateButton from "./EditCertificateButton";
import DeleteCertificateButton from "./DeleteCertificateButton";
import ToolbarMenuArrowButton from "./ToolbarMenuArrowButton";

type ToolbarButtonsMenuProps = {
  extendTools: boolean;
};

const ToolbarButtonsMenu: React.FC<ToolbarButtonsMenuProps> = ({extendTools}) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  console.log(extendTools);
  
  return (
    <>
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
              <EditCertificateButton />
              <DeleteCertificateButton />
            </>
          )}
        </Box>
      </Collapse>
      <ToolbarMenuArrowButton
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

export default ToolbarButtonsMenu;
