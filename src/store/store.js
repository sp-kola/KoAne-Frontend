import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"

import locationReducer from './reducers/location';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
    location: locationReducer,
    ui: uiReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default store;