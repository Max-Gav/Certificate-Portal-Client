import React from "react";
import { Box, Container } from "@mui/material";
import LoginPageForm from "./login-page-components/LoginPageForm";
import LoginPageLink from "./login-page-components/LoginPageLink";
import FormTitle from "../../common/components/form-components/form-title/FormTitle";
import FormNavbar from "../../common/components/form-components/form-navbar/FormNavbar";

const LoginPage: React.FC = () => {
  return (
    <>
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
            marginTop:"64px"
          }}
        >
          <FormTitle title="התחברות" />
          <LoginPageForm />
          <LoginPageLink />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
