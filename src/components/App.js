import React from "react";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      Hello react
      <BrowserRouter>
        <Switch>
          <Route to="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
