import React from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";

const main = () => {
  return (
    <Grid align="center">
      <h1>Please Choose the funtion you need</h1>
      <Button type="TodoList" color="primary" variant="contained">
        Todo List
      </Button>
      <Button type="Schedule" color="primary" variant="contained">
        Schedule
      </Button>
      <Button type="Log Out" color="primary" variant="contained">
        Log Out
      </Button>
      <Button type="Gallery" color="primary" variant="contained">
        Gallery
      </Button>
    </Grid>
  );
};
export default main;
