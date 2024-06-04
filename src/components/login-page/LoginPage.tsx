import React from "react";
import { Box, Container } from "@mui/material";
import LoginPageForm from "./login-page-components/LoginPageForm";
import LoginPageTitle from "./login-page-components/LoginPageTitle";
import LoginPageLink from "./login-page-components/LoginPageLink";

const LoginPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          direction: "rtl",
        }}
      >
        <LoginPageTitle />
        <LoginPageForm />
        <LoginPageLink />
      </Box>
    </Container>
  );
};

export default LoginPage;