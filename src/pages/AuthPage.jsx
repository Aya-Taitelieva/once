import React, { useReducer } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FORM":
      return {
        ...state,
        isLogin: !state.isLogin,
        displayName: "",
        photoURL: "",
        email: "",
        password: "",
      };
    case "HANDLE_INPUT_CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
}

const defaultTheme = createTheme();

export default function AuthPage() {
  const [state, dispatch] = useReducer(reducer, {
    isLogin: true,
    displayName: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const { user, register, login, error, setError, clearError } =
    useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isLogin) {
      login(state.email, state.password);
    } else {
      register(state.email, state.password, state.displayName, state.photoURL);
    }
  };

  if (user) {
    return <Navigate to="/products" />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {state.isLogin ? "Sign in" : "Sign up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {!state.isLogin && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full name"
                  name="displayName"
                  value={state.displayName}
                  onChange={(e) =>
                    dispatch({
                      type: "HANDLE_INPUT_CHANGE",
                      field: "displayName",
                      value: e.target.value,
                    })
                  }
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="image"
                  label="Photo"
                  name="photoURL"
                  value={state.photoURL}
                  onChange={(e) =>
                    dispatch({
                      type: "HANDLE_INPUT_CHANGE",
                      field: "photoURL",
                      value: e.target.value,
                    })
                  }
                />
              </>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "HANDLE_INPUT_CHANGE",
                  field: "email",
                  value: e.target.value,
                })
              }
              autoFocus={!state.isLogin}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "HANDLE_INPUT_CHANGE",
                  field: "password",
                  value: e.target.value,
                })
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {state.isLogin ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  onClick={() => dispatch({ type: "TOGGLE_FORM" })}
                  href="#"
                  variant="body2"
                >
                  {state.isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={clearError}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={clearError} severity="error" sx={{ width: "33vw", fontSize:'1.5rem'}}>
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
