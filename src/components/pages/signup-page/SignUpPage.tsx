import React from "react";
import { Box, Container } from "@mui/material";
import SignUpForm from "./sign-up-page-components/SignUpForm";
import SignUpLink from "./sign-up-page-components/SignUpLink";
import FormTitle from "../../common/form-components/form-title/FormTitle";
import FormNavbar from "../../common/form-components/form-navbar/FormNavbar";
import ProtectedPage from "../../common/protected-page/ProtectedPage";

const SignUpPage: React.FC = () => {
  return (
    <ProtectedPage isTokenRequired={false}>
      <FormNavbar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
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
          <FormTitle title="הרשמה" />
          <SignUpForm />
          <SignUpLink />
        </Box>
      </Container>
    </ProtectedPage>
  );
};

export default SignUpPage;
