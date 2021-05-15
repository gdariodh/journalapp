import { types } from "../types";
import { firebase, googleAuthProvider } from "../../firebase/firebaseConfig";

// dispatch invoca el action

export const startLoginGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      const { displayName, uid } = user;
      dispatch(login(uid, displayName))
    } catch (error) {
      console.log(error);
    }
    // signInWithPopup(provider) -> ej: google, facebook, etc
    // signInWithPopup for login with google or facebook, etc
  };
};

// actions asincronos with thunk
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(email, password));
    }, 3500);
  };
};
// action ejecutado con dispatch de startLoginEmailPassword
// este action se comunica con el reducer
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
