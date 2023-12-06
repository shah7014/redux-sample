import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../app/appReducer";
import employeeReducer from "../employee/employeeReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    employee: employeeReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
