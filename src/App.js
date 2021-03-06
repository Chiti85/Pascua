import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home.jsx";
import Rules from "./components/rulesT/rules";
import Map from "./components/map/map";
import Schedule from "./components/schedule/schedule";
import Material from "./components/materials/material";
import { render } from "@testing-library/react";
import Map2 from "./components/map/map2";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rules" exact component={Rules} />
          <Route path="/map" exact component={Map} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/material" exact component={Material} />
          <Route path="/map2" exact component={Map2} />
        </Switch>
      </>
    );
  }
}

export default App;
