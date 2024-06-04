import React from "react";
import { Box, Container } from "@mui/material";
import SignUpForm from "./sign-up-page-components/SignUpForm";
import SignUpTitle from "./sign-up-page-components/SignUpTitle";
import SignUpLink from "./sign-up-page-components/SignUpLink";

const SignUpPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SignUpTitle />
        <SignUpForm />
        <SignUpLink />
      </Box>
    </Container>
  );
};

export default SignUpPage;
