import { types } from "../types";

// dispatch invoca el action

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
