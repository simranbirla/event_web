import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../redux/actions";
import "../Style/Header.css";

const Header = ({ auth, signIn }) => {
  return (
    <div className="header">
      <input type="checkbox" id="check" />
      <label for="check" className="label"></label>
      <Link to="/" className="first">
        Home
      </Link>
      <Link to="/find/interested">Interested</Link>
      <Link to="/find/events">Events</Link>
      {auth.sign_in ? (
        <div className="header__sign">
          <div className="header__user">
            <img src={auth.user.user.photoURL} alt="profile-user" />
            <span>{auth.user.user.displayName}</span>
          </div>

          <Link to="/login" className="logout">
            LogOut
          </Link>
        </div>
      ) : (
        <button onClick={signIn} className="login">
          LogIn
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.auth);
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn })(Header);
