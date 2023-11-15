import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notesReducer";
import postsReducer from "../reducers/postsReducer";

const store = createStore(
  combineReducers({
    notes: notesReducer,
    posts: postsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
