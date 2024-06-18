import React, { useEffect } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import useAuthForm from "../../../../hooks/mutations/auth/useAuthForm";
import APIRoutes from "../../../../config/api/APIRoutes";
import registerSchema from "../../../../common/schemas/registerSchema";
import FormDetails from "../../../../common/types/FormDetails";

const SignUpForm: React.FC = () => {
  const [registerMutation, statusCode] = useAuthForm(APIRoutes.REGISTER);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data: FormDetails) => {
    registerMutation.mutate(data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    switch (statusCode) {
      case 201:
        navigate("/");
        break;
      case 409:
        setError("username", {
          type: "server",
          message: "המשתמש כבר רשום במערכת",
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
      <TextField
        margin="normal"
        required
        fullWidth
        label="אשר סיסמא"
        type="password"
        id="confirmPassword"
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword?.message}
        color="secondary"
        {...register("confirmPassword")}
      />
      <Button
        type="submit"
        color={registerMutation.isLoading ? "secondary" : "primary"}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, height: "40px" }}
      >
        {registerMutation.isLoading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          "צור משתמש"
        )}
      </Button>
    </Box>
  );
};

export default SignUpForm;
