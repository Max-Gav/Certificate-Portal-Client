import React from "react";
import {
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUpTitle: React.FC = () => {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "rgb(25, 118, 210)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" dir="rtl">
        הרשמה
      </Typography>
    </>
  );
};

export default SignUpTitle;
