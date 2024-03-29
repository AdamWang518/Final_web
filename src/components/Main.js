import React from "react";
import { Grid, Button } from "@material-ui/core";

const main = () => {
  return (
    <Grid align="center">
      <h1>Please Choose the funtion you need</h1>
      <a href="/TodoList">
        <Button type="TodoList" color="primary" variant="contained">
          Todo List
        </Button>
      </a>
      <a href="/Calendar">
        <Button type="Calendar" color="primary" variant="contained">
          Calendar
        </Button>
      </a>
      <a href="/Login">
        <Button type="Log Out" color="primary" variant="contained">
          Log Out
        </Button>
      </a>
    </Grid>
  );
};
export default main;
