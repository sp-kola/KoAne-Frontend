import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"

import locationReducer from './reducers/location';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth'
import customerReducer from './reducers/customers'
import vendorReducer from './reducers/vendor'
import orderReducer from './reducers/order'

const rootReducer = combineReducers({
    location: locationReducer,
    ui: uiReducer,
    auth: authReducer,
    customers: customerReducer,
    vendor: vendorReducer,
    order: orderReducer, 
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default store;