import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "../reducers/notesReducer";

const store = createStore(notesReducer, composeWithDevTools());

export default store;
