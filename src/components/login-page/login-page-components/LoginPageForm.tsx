import React, { useEffect } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../common/schemas/loginSchema";
import useAuthForm from "../../../hooks/auth/useAuthForm";
import APIRoutes from "../../../config/api/APIRoutes";
import FormDetails from "../../../common/types/FormDetails";

const LoginPageForm: React.FC = () => {
  const { request, loading, statusCode } = useAuthForm(APIRoutes.LOGIN);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
    } = useForm({ resolver: yupResolver(loginSchema) });
  const onSubmit = async (data: FormDetails): Promise<void> => {
    await request(data);
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
        color={loading ? "secondary" : "primary"}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, height: "40px" }}
      >
        {loading ? <CircularProgress color="inherit" size={24} /> : "התחברות"}
      </Button>
    </Box>
  );
};

export default LoginPageForm;
