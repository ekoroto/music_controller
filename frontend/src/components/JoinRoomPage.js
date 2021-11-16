import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default class JoinRoomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
  }

  render() {
    debugger;
    return (
      <Grid container spacing={1} align="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Join a Room
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={this.state.error}
            label="Code"
            placeholder="Enter a Room Code"
            value={this.state.roomCode}
            helperText={this.state.error}
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
}
