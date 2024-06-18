import React from "react";
import { Box, Container } from "@mui/material";
import LoginPageForm from "./login-page-components/LoginPageForm";
import LoginPageLink from "./login-page-components/LoginPageLink";
import FormNavbar from "../../common/form-components/form-navbar/FormNavbar";
import FormTitle from "../../common/form-components/form-title/FormTitle";
import ProtectedPage from "../../common/protected-page/ProtectedPage";

const LoginPage: React.FC = () => {
  return (
    <ProtectedPage isTokenRequired={false}>
      <FormNavbar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "20px",
            border: "2px solid black",
            borderRadius: "10px",
            marginTop: "64px",
          }}
        >
          <FormTitle title="התחברות" />
          <LoginPageForm />
          <LoginPageLink />
        </Box>
      </Container>
    </ProtectedPage>
  );
};

export default LoginPage;
