import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import gameReducer from "../reducers/gameReducer";

const store = createStore(
  combineReducers({
    games: gameReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
