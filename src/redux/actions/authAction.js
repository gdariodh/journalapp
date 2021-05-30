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
  return async (dispatch) => {


    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email,password)
      console.log(user);
      dispatch(login(user.user.uid, user.user.displayName)) 
    } catch (error) {
      console.log(error);
    }

    // setTimeout(() => {
    //   dispatch(login(email, password));
    // }, 3500);
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
  return async(dispatch) => {
    try {
      const {email, password, name} = dataUser;
      const newUser = await firebase.auth().createUserWithEmailAndPassword(email,password);
      // add username to newUser 
      await newUser.user.updateProfile({displayName:name})
      
      // pasamos displayName y uid
      dispatch(login(newUser.user.uid, newUser.user.displayName))

    } catch (error) {
      console.log(error)
    }

  }
}