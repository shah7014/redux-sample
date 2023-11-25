import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../reducers/appReducers";

const store = createStore(
  combineReducers({
    app: appReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
