import { types } from "../types";

const initialState = {
    name: 'test'
}


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
        return{
            name: null,
            uid: null
        }

    default:
      return state;
  }
};
