import React from "react";
import { Route, Switch } from "react-router-dom";
import PodcastsList from "./container/PodcastsList";
import Contact from "./container/Contact";

export default () =>
  <Switch>
    <Route exact path="/" component={PodcastsList} />
    <Route path="/contact" component={Contact} />
  </Switch>;