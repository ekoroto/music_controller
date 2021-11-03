import React from "react";
import {
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const DEFAULT_VOTES = 2;

export default class CreateRoomPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestCanPause: true,
      votesToSkip: DEFAULT_VOTES,
    };
  }

  onCreateRoom = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guest_can_pause: this.state.guestCanPause,
        votes_to_skip: this.state.votesToSkip,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  onGuestCanPauseChange = (e) => {
    debugger;
    this.setState({
      guestCanPause: e.target.value || false,
    });
  };

  onVotesChange = (e) => {
    debugger;
    this.setState({
      votesToSkip: e.target.value,
    });
  };

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest Controll of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.onGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required="true"
              type="numeber"
              defaultValue={DEFAULT_VOTES}
              inputProps={{ min: 1, style: { textAlign: "center" } }}
              onChange={this.onVotesChange}
            />
            <FormHelperText>
              <div align="center">Votes Required to Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="secondary"
            variant="contained"
            onClick={this.onCreateRoom}
          >
            Create a Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}
