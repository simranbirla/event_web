import React from "react";
import { signIn } from "../redux/actions";
import { connect } from "react-redux";

//import "../Style/Login.css";
const Login = (props) => {
  return (
    <div className="login">
      <h2>Login here through google</h2>

      <button onClick={props.signIn}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn })(Login);
