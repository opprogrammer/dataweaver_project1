import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./reducers/reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { detailReducer } from "./reducers/detail";

const rootReducer = { users: userReducer, details: detailReducer };

const reducers = combineReducers(rootReducer);

const middlewares = [thunk];

let initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
