import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Game from "./Game/Game";
import Landing from "./Landing/Landing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
