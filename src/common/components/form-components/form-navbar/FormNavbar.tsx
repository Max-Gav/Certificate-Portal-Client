import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const FormNavbar: React.FC = () => {
  return (
    <AppBar color="info" elevation={0} sx={{position:"relative"}}>
      <Toolbar>
        <IconButton
          component={Link}
          to="/"
          edge="start"
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default FormNavbar;
