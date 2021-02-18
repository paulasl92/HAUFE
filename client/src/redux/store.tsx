import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import jwt from "jsonwebtoken";
import authentication from "./reducers/reducerUser";
import charactersReducer from "./reducers/reducerCharacters";

const createRootReducer = () =>
  combineReducers({
    authentication,
    charactersReducer
  });

  export const isValidToken = (token) => {
    let decoded = jwt.decode(token);
    return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
  };

const initState = {
  authentication: {
    currentUser: localStorage.getItem("USER-TOKEN")
    ? isValidToken(localStorage.getItem("USER-TOKEN"))
    : null,
    token: localStorage.getItem("USER-TOKEN")
    ? localStorage.getItem("USER-TOKEN")
    : null,
    error: "",
    loading: false,
    isAuthenticated: false,
  },
  charactersReducer : {
    pending: false,
    characters: [],
    error: null
  }
}

export default function makeStore(initialState = initState) {
  let composeEnhancers = compose;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}