import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import thunk from "redux-thunk";

import ApplicationReducer from "./Application/ApplicationReducer";
import { AuthReducer } from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  ApplicationReducer,
  AuthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
