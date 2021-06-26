import { types } from "../types";

const initialState = {
    name: '',
    uid:''
}


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

      // devolvemos un objeto vacio, para que se reinicie todo el state
    case types.logout:
        return{}

    default:
      return state;
  }
};
