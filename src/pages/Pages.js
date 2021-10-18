import React from "react";
import { Switch, Route } from "react-router";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

export default function Layout() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}
