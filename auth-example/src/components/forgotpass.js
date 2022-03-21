import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Backdrop, CircularProgress, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { firebaseAuth } from "../firebase";
import {sendPasswordResetEmail} from "firebase/auth"

const theme = createTheme();

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

export default function ForgotPassword({handler}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(''); //error message
    const [message, setMessage] = useState(''); //success message

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setLoading(true)
        setError('')
        setMessage('')

        sendPasswordResetEmail(firebaseAuth, data.get('email'))
        .then(() => {
            setMessage('Password reset email sent.')
            //handler('login') you could also redirect the user to login page
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false)
        })
    }


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
                Forgot Password
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                 {error ? <Alert severity="error">{error}</Alert> : <></>}
                 {message ? <Alert severity="success">{message}</Alert> : <></>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" onClick={() => {handler("login")}} variant="body2">
                        Already have an account? Sign in
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={() => {handler("signup")}} variant="body2">
                        Don't have an account? Sign Up
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