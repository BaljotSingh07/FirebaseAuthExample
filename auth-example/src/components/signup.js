import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, Backdrop, CircularProgress, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { firebaseAuth } from "../firebase";
import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp({handler}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    //get the form data
    const data = new FormData(event.currentTarget);
    setLoading(true)
    //check password and confirm password match
    if(data.get('password') !== data.get('confirmPassword')){
      setError('Password and confirm password do not match.')
      setLoading(false)
      return
    }
    //firebase signup method
    createUserWithEmailAndPassword(firebaseAuth, data.get('email'), data.get('password'))
    .then(userCredential => {
        //created new user, send verification email
        sendEmailVerification(firebaseAuth.currentUser)
        .then(() => {
          // Email verification sent!, you can do something here if you need to
          // ...
        });
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    })

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {error ? <Alert severity="error">{error}</Alert> : <></>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" onClick={() => {handler('login')}} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}