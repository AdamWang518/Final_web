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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
const Login = () => {
  const [usernameSub, setUsername] = useState("");
  const [passwordSub, setPassword] = useState("");
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    axios
      .get(
        "https://zhenghui.idv.tw/Profoilo/MusicBox/php/signup.php?userName=" +
          usernameSub +
          "&password=" +
          passwordSub
      )
      .then((res) => {
        console.log(res);
        if (
          res.data.data[0].username === usernameSub &&
          res.data.data[0].password === passwordSub
        ) {
          window.location.href = "/Main";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <h2>Login</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter your username"
          onChange={handleUserChange}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={handlePasswordChange}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me on this device"
        />
        <Button
          type="Login"
          color="primary"
          onClick={handleSubmit}
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Login
        </Button>
        <Typography>
          {" "}
          Don't have an account ?<a href="/SignUp">Sign Up</a>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
