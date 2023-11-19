import {
  FETCH_GAMES_LOADING,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS,
} from "../actions/gameActions";

const initialState = {
  populargames: [],
  upcominggames: [],
  newgames: [],
  loading: false,
  error: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_GAMES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        populargames: [],
        upcominggames: [],
        newgames: [],
      };
    }
    case FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        populargames: action.payload.popularGames,
        upcominggames: action.payload.upcomingGames,
        newgames: action.payload.newGames,
      };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
