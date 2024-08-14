import { Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../../../../../../config/theme/AppTheme";
import ToolbarMenuArrowButton from "./ToolbarMenuArrowButton";
import DialogButton from "./DialogButton";
import DialogName from "../../../../../../../../common/types/Dialog Types/DialogName";

type ToolbarButtonsMenuProps = {
  extendTools: boolean;
};

const buttonConfigs = [
  { dialogName: "Create" as DialogName },
  { dialogName: "Add" as DialogName },
  { dialogName: "Edit" as DialogName, extendToolsRequired: true },
  { dialogName: "Delete" as DialogName, extendToolsRequired: true },
];

const ToolbarButtonsMenu: React.FC<ToolbarButtonsMenuProps> = ({
  extendTools,
}) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

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
          {buttonConfigs.map(({ dialogName, extendToolsRequired }) => (
            <DialogButton
              key={dialogName}
              dialogName={dialogName}
              extendTools={extendTools}
              extendToolsRequired={extendToolsRequired}
            />
          ))}
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
