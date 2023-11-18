import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import expenseReducer from "../reducers/expenseReducer";

const store = createStore(expenseReducer, composeWithDevTools());

export default store;
