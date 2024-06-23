import React from "react";
import {
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface FormTitleProps{
    title:string
}
const FormTitle: React.FC<FormTitleProps> = ({title}:FormTitleProps) => {
    const theme = useTheme()
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: theme.palette.black.main}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" dir="rtl" color={"warning"}>
        {title}
      </Typography>
    </>
  );
};

export default FormTitle;
