import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import TimeLine from "../pages/TimeLine";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/timeLine" component={TimeLine} isLogged />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
