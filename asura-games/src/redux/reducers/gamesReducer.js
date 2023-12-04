import {
  SET_LATEST_GAMES,
  SET_POPULARITY_GAMES,
  SET_POPULARITY_PERIOD,
  SET_POPULAR_TODAY_GAMES,
} from "../actions/gameActions";

const initialState = {
  popularityPeriod: "weekly",
  popularGames: [],
  popularToday: [],
  latestUpdates: {
    pageNo: 0,
    games: [],
  },
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
    case SET_POPULAR_TODAY_GAMES: {
      return {
        ...state,
        popularToday: action.payload,
      };
    }
    case SET_LATEST_GAMES: {
      return {
        ...state,
        latestUpdates: {
          games: action.payload.games,
          pageNo: action.payload.pageNo,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default gamesReducer;
