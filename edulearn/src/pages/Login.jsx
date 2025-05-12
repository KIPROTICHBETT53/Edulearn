import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  TextField
} from '@mui/material';
import { signInWithGoogle, auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.error("Email Login Error:", error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Welcome to EduLearn</Typography>

        {/* Email/Password login form */}
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
          onClick={handleEmailLogin} sx={{ mt: 2 }}
        >
          Sign in with Email
        </Button>

        {/* Google Sign-In */}
        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          Or
        </Typography>
        <Button
          fullWidth variant="outlined" onClick={handleGoogleSignIn}
          sx={{ mt: 2 }}
        >
          Sign in with Google
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
