import React from "react";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPageTitle: React.FC = () => {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "rgb(25, 118, 210)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        התחברות
      </Typography>
    </>
  );
};

export default LoginPageTitle;
