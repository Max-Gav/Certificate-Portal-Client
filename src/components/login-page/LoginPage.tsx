import React, { FunctionComponent, useState } from 'react'
import { Button, TextField, Container, Typography, Box, Alert } from '@mui/material';

const LoginPage:FunctionComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!email || !password) {
        setError('Email and password are required');
        return;
      }
  
      // Clear error and call onLogin
      setError('');
    //   onLogin(email, password);
    };
  
  return (
    <Container maxWidth="xs">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  </Container>
  )
}

export default LoginPage