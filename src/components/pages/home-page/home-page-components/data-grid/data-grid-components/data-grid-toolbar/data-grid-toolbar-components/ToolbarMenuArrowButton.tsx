import { IconButton } from "@mui/material";
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
    <IconButton
      onClick={() => {
        setMenuOpen((prev) => !prev);
      }}
      color="white"
    >
      {isMenuOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
    </IconButton>
  );
};

export default ToolbarMenuArrowButton;
