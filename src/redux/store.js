
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers';
import  apiMiddleware from './apiMiddleware'
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = () => {

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(apiMiddleware)),
    );

    return store;
};

export default configureStore