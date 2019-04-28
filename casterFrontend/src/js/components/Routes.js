import React from "react";
import { Route, Switch } from "react-router-dom";
import PodcastsList from "./container/PodcastsList";
import About from "./container/About";

export default () =>
  <Switch>
    <Route exact path="/" component={PodcastsList} />
    <Route path="/about" component={About} />
  </Switch>;