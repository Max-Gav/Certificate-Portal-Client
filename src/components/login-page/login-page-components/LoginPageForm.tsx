import React, { useEffect, useState } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../common/schemas/loginSchema";
import useAuthForm from "../../../hooks/auth/useAuthForm";
import APIRoutes from "../../../config/api/APIRoutes";
import FormDetails from "../../../common/types/FormDetails";

const LoginPageForm: React.FC = () => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
  const loginMutation = useAuthForm(APIRoutes.LOGIN, setStatusCode);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(loginSchema) });
  
  const onSubmit = (data: FormDetails) => {
    loginMutation.mutate(data);
  };

  useEffect(() => {
    switch (statusCode) {
      case 401:
        setError("password", { type: "server", message: "סיסמא שגויה" });
        break;
      case 404:
        setError("username", {
          type: "server",
          message: "המשתמש לא רשום במערכת",
        });
        break;
    }
  }, [statusCode]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
      dir="rtl"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="שם משתמש"
        autoFocus
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
        color="secondary"
        {...register("username")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="סיסמא"
        type="password"
        id="password"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        color="secondary"
        {...register("password")}
      />
      <Button
        type="submit"
        color={loginMutation.isLoading ? "secondary" : "primary"}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, height: "40px" }}
      >
        {loginMutation.isLoading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          "התחברות"
        )}
      </Button>
    </Box>
  );
};

export default LoginPageForm;
