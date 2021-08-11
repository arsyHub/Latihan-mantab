import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import UpdateBarang from "./UpdateBarang";

const Routes = () => {
  <Router>
    <Switch>
      <Route path="/UpdateBarang/:id" />
      <UpdateBarang />
    </Switch>
  </Router>;
};
