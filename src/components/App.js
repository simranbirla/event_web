import React from "react";
import Login from "./Login";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      Hello react
      <Router history={history}>
        <Switch>
          <Route to="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
