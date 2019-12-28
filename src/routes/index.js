import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Tweets from "../pages/Tweets";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/tweets" component={Tweets} />
    </Switch>
  );
}
