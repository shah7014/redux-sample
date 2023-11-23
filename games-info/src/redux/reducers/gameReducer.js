import { SET_GAMES, SET_SELECTED_GAME } from "../actions/gameActions";

const initialState = {
  popularGames: [],
  upcomingGames: [],
  newGames: [],
  selectedGame: {},
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
    default: {
      return state;
    }
  }
};

export default gameReducer;
