import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import Authreducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = composeWithDevTools(applyMiddleware(thunk))

const rootReducers = combineReducers({ Authreducer });

export const store = legacy_createStore(rootReducers, middleware);


// import { legacy_createStore, combineReducers } from 'redux';
// import Authreducer from './reducer';

// const RootReducers = combineReducers({  Authreducer });

// export const store = legacy_createStore(RootReducers);