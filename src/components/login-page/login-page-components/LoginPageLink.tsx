import { Box, Link } from "@mui/material";
import React from "react";
import AppRoutes from "../../../config/routes/AppRoutes";

const LoginPageLink: React.FC = () => {
  return (
    <>
      <Box alignSelf={"start"}>
        <Link href={AppRoutes.REGISTER} variant="body2" color={"secondary"}>
          {"?אין לך משתמש"}
        </Link>
      </Box>
    </>
  );
};

export default LoginPageLink;
