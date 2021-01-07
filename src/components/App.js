import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Home from "./Home";
import Events from "./Events";
import Interested from "./Interested";

const App = (props) => {
  return (
    <div>
      Hello reac-t
      <Router history={history}>
        <Switch>
          {!props.auth.sign_in ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={Login} />
          )}
          <Route path="/events" exact component={Events} />
          <Route path="/interested" exact component={Interested} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
