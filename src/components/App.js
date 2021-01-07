import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Home from "./Home";
import Events from "./Events";

const App = (props) => {
  return (
    <div>
      Hello react
      <Router history={history}>
        <Switch>
          {!props.auth.sign_in ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route to="/" exact component={Login} />
          )}
          <Route to="/events" exact component={Events} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
