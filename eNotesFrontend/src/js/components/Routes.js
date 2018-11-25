import React from "react";
import { Route, Switch } from "react-router-dom";
import FormContainer from "./container/FormContainer";
import Enotes from "./container/Enotes";

export default () =>
  <Switch>
    <Route exact path="/" component={FormContainer} />
    <Route path="/enotes" component={Enotes} />
  </Switch>;