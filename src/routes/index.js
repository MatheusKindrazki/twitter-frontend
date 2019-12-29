import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import TimeLine from "../pages/TimeLine";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/timeLine" component={TimeLine} />
    </Switch>
  );
}
