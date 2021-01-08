import { provider, auth } from "../../firebase";

export const signIn = () => (dispatch) => {
  dispatch({ type: "LOADING" });
  auth
    .signInWithPopup(provider)
    .then((res) => {
      dispatch({ type: "SIGN_IN", payload: res });
      console.log(res);
    })
    .catch((err) => alert(err));
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    auth
      .signOut()
      .then((res) => {
        //console.log(res);
        dispatch({ type: "SIGN_OUT" });
      })
      .catch((err) => alert(err));
  };
};
