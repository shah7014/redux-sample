import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../app/appReducer";
import todoReducer from "../todo/todoReducer";
import employeeReducer from "../employee/employeeReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    todo: todoReducer,
    employee: employeeReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
