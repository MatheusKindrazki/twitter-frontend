import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isLogged,
  ...rest
}) {
  const signed = localStorage.getItem("@Tweet:name");

  if (!signed && isLogged) {
    return <Redirect to="/" />;
  }

  if (signed && !isLogged) {
    return <Redirect to="/timeLine" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}
