import React, { useEffect } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../../../../hooks/mutations/auth/useAuthForm";
import APIRoutes from "../../../../config/api/APIRoutes";
import loginSchema from "../../../../common/schemas/loginSchema";
import FormDetails from "../../../../common/types/FormDetails";

const LoginPageForm: React.FC = () => {
  const [loginMutation, statusCode] = useAuthForm(APIRoutes.LOGIN);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    } = useForm({ resolver: yupResolver(loginSchema) });
    
    const onSubmit = (data: FormDetails) => {
      loginMutation.mutate(data);
    };
    const navigate = useNavigate();

  useEffect(() => {
    switch (statusCode) {
      case 200:
        navigate("/")
        break;
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
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="שם משתמש"
        type="text"
        autoFocus
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
        color="black"
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
        color="black"
        {...register("password")}
      />
      <Button
        type="submit"
        color={loginMutation.isLoading ? "black" : "orange"}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, height: "40px" }}
      >
        {loginMutation.isLoading ? (
          <CircularProgress size={24} color="inherit"/>
        ) : (
          "התחברות"
        )}
      </Button>
    </Box>
  );
};

export default LoginPageForm;
