import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";
const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const [usernameSub, setUsername] = useState("");
  const [passwordSub, setPassword] = useState("");
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    axios.get(
      "https://backend518.herokuapp.com/signup.php?userName=" +
        usernameSub +
        "&password=" +
        passwordSub
    )
    .then((res) => { console.table(res.data)
      window.location.href = "/Login";
     })
    .catch((error) => { console.error(error) })
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
          onChange={handleUserChange}
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
          onChange={handlePasswordChange}
        />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleSubmit}
          >
            Sign up
          </Button>
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
