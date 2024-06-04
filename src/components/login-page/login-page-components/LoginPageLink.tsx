import { Box, Link } from "@mui/material";
import React from "react";
import AppRoutes from "../../../config/AppRoutes";

const LoginPageLink: React.FC = () => {
  return (
    <>
      <Box alignSelf={"start"}>
        <Link href={AppRoutes.REGISTER} variant="body2">
          {"?אין לך משתמש"}
        </Link>
      </Box>
    </>
  );
};

export default LoginPageLink;
