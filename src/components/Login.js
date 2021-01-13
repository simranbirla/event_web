import React from "react";
import { signIn } from "../redux/actions";
import { connect } from "react-redux";
import "../Style/Login.css";
const Login = (props) => {
  return (
    <div className="login_page">
      <h2>Login here through google</h2>
      <img
        src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=338&ext=jpg"
        alt="login"
      />
      <button onClick={props.signIn}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn })(Login);
