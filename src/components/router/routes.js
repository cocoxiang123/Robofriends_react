import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>404 - Not Found</Route>
    </Switch>
  );
}

export default Routes;
