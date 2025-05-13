import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Alert
} from '@mui/material';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(''); // Clear previous errors before attempting signup
    try {
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", result.user);
      // Redirect to dashboard after successful signup
      navigate('/dashboard');
    } catch (error) {
      console.error("Signup Error:", error.message);
      setError(error.message); // Set error message for display
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Create an Account</Typography>

        {/* Show error message if any */}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Email"
          fullWidth margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth variant="contained" color="primary"
          onClick={handleSignup} sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;
