import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Home from "./Home";
import Events from "./Events";
import Interested from "./Interested";
import OtherComponents from "./OtherComponents";
import Header from "./Header";
import "../Style/index.css";

const App = (props) => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          {props.auth.sign_in ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={Login} />
          )}
          <Route path="/find/events" exact component={Events} />
          <Route path="/find/interested" exact component={Interested} />
          <Route path="/:id" exact component={OtherComponents} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
