import { types } from "../types";

export const Login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
