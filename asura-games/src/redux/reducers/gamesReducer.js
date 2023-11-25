import {
  SET_POPULARITY_GAMES,
  SET_POPULARITY_PERIOD,
} from "../actions/gameActions";

const initialState = {
  popularityPeriod: "weekly",
  popularGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULARITY_PERIOD: {
      return {
        ...state,
        popularityPeriod: action.payload,
      };
    }
    case SET_POPULARITY_GAMES: {
      return {
        ...state,
        popularGames: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default gamesReducer;
