import {
  REMOVE_FILTERED_GAMES,
  SET_FILTERED_GAMES,
  SET_GAMES,
  SET_SELECTED_GAME,
} from "../actions/gameActions";

const initialState = {
  popularGames: [],
  upcomingGames: [],
  newGames: [],
  selectedGame: {},
  filteredgames: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES: {
      return {
        ...state,
        popularGames: action.payload.popularGames,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    }
    case SET_SELECTED_GAME: {
      return {
        ...state,
        selectedGame: action.payload,
      };
    }
    case SET_FILTERED_GAMES: {
      return {
        ...state,
        filteredgames: action.payload,
      };
    }
    case REMOVE_FILTERED_GAMES: {
      return {
        ...state,
        filteredgames: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
