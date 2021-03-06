import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

export default class HomePage extends React.Component {
  render() {
    debugger;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            This is home page
          </Route>
          <Route path="/join" component={JoinRoomPage} />
          <Route path="/create" component={CreateRoomPage} />
          <Route path="/room/:roomCode" component={Room} />
        </Switch>
      </BrowserRouter>
    );
  }
}
