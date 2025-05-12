import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  TextField
} from '@mui/material';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", result.user);
      // Optional: redirect to profile creation or dashboard
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Create an Account</Typography>
        <TextField
          label="Email"
          fullWidth margin="normal"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)}
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
