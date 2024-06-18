import { Box, Link } from "@mui/material";
import React from "react";
import AppRoutes from "../../../../config/routes/AppRoutes";

const SignUpLink: React.FC = () => {
  return (
    <>
      <Box alignSelf={"start"}>
        <Link href={AppRoutes.LOGIN} variant="body2" color={"secondary"}>
          {"?כבר יש לך משתמש"}
        </Link>
      </Box>
    </>
  );
};

export default SignUpLink;
