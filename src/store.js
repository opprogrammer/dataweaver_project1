import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = { users: userReducer };

const reducers = combineReducers(rootReducer);

const middlewares = [thunk];

let initialState = {};

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };