import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter your username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
        />
        <a href="/Login">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign up
          </Button>
        </a>
        <Typography>
          {" "}
          Do you have an account ?<a href="/Login">Login</a>
          {/* <Switch>
                <Route>
                <Link to="/login">
                        Login 
                </Link>
                </Route>
                </Switch> */}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
