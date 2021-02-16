import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import authentication from "./reducerUser";

const createRootReducer = () =>
  combineReducers({
    authentication,
  });

const initState = {
  authentication: {
    currentUser: null,
    token: "",
    error: "",
    loading: false,
    isAuthenticated: false,
  },
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

  if ((module as any).hot) {
    (module as any).hot.accept("./reducerUser", () => {
      const nextReducer = require("./reducerUser").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}