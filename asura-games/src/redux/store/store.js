import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../reducers/appReducers";
import gamesReducer from "../reducers/gamesReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    games: gamesReducer,
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
