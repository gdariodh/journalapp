// TODO: alertas, msg, etc

import { typesUi as types } from "../types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };

    case types.uiStartLogin:
      return{
        ...state,
        loading: true
      }  

      
    case types.uiEndLogin:
      return{
        ...state,
        loading: false
      }  

    default:
      return state;
  }
};
