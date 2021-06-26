import Swal from "sweetalert2";
import { types } from "../types";
import { firebase, googleAuthProvider } from "../../firebase/firebaseConfig";
// otros actions
import { startLoginUi, endLoginUi } from "../../redux/actions/uiAction";


// dispatch invoca el action

export const startLoginGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      const { displayName, uid } = user;
      dispatch(login(uid, displayName));
    } catch (error) {
      console.log(error);
    }
    // signInWithPopup(provider) -> ej: google, facebook, etc
    // signInWithPopup for login with google or facebook, etc
  };
};

// actions asincronos with thunk
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    // bloquea btn login mientras se hace consulta, asi evita clicks de mas en login
    dispatch(startLoginUi());

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      dispatch(login(user.user.uid, user.user.displayName));
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error',error.message,'error'
      )
    }
    // pone false el loading y habilita el btn login
    dispatch(endLoginUi());
  };
};

// este action se comunica con el reducer
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

// register with EmailPassword
export const registerWithEmailPassword = (dataUser) => {
  return async (dispatch) => {
    try {
      const { email, password, name } = dataUser;
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // add username to newUser
      await newUser.user.updateProfile({ displayName: name });

      // pasamos displayName y uid
      dispatch(login(newUser.user.uid, newUser.user.displayName));
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error',error.message,'error'
      )
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
