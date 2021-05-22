import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

// para poder colocar redux como applyMiddleware en store
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// combina todos los reducer en uno
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

// levantamos redux en la app
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
