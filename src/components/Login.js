import React, { useState } from "react";
import { provider, auth } from "../firebase";
//import "../Style/Login.css";
const Login = () => {
  const [sign, setSign] = useState(false);
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setSign(true);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <h2>Login here through google</h2>

      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
