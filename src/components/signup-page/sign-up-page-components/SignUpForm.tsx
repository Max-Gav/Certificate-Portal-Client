import React, { useEffect } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../../common/schemas/registerSchema";
import useAuthForm from "../../../hooks/auth/useAuthForm";
import APIRoutes from "../../../config/APIRoutes";
import FormDetails from "../../../common/types/FormDetails";

const SignUpForm: React.FC = () => {
  const { request, loading, statusCode } = useAuthForm(APIRoutes.REGISTER);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (data: FormDetails): Promise<void> => {
    await request(data);

    switch (statusCode) {
      case 409:
        setError("username", {
          type: "server",
          message: "המשתמש כבר רשום במערכת",
        });
        break;
    }
  };

  useEffect(() => {
    switch (statusCode) {
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
        {...register("confirmPassword")}
      />
      <Button
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, fontWeight: "bold", height: "40px" }}
      >
        {loading ? <CircularProgress color="inherit" size={24} /> : "צור משתמש"}
      </Button>
    </Box>
  );
};

export default SignUpForm;
