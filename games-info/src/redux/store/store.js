import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import gameReducer from "../reducers/gameReducer";
import appReducer from "../reducers/appReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    games: gameReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
