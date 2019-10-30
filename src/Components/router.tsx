import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/cafe/:id" exact component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
