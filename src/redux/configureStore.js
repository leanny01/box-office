import { createStore, applyMiddleware } from "redux";

import { reducer, initialState } from "./moviesReducer";
import apiMiddleware from "./apiMiddleware";

export const configureStore = () => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(apiMiddleware)
  );
  return store;
};

export default configureStore;
