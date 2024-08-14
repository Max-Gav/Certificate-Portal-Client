import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type ToolbarMenuArrowButtonProps = {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToolbarMenuArrowButton: React.FC<ToolbarMenuArrowButtonProps> = ({
  isMenuOpen,
  setMenuOpen,
}) => {
  return (
    <Tooltip title={isMenuOpen ? "סגירת תפריט פעולות" : "פתיחת תפריט פעולות"}>
      <IconButton
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        color="white"
      >
        {isMenuOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ToolbarMenuArrowButton;
