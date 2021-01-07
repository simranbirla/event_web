import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Home from "./Home";

const App = (props) => {
  return (
    <div>
      Hello react
      <Router history={history}>
        <Switch>
          {!props.auth.sign_in ? (
            <Route path="/" component={Home} />
          ) : (
            <Route to="/" component={Login} />
          )}
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
