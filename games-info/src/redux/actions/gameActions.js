import {
  rawgInstance,
  getPopularGamesUrl,
  getUpcomingGamesUrl,
  getNewGamesUrl,
} from "../../api/rawgInstance";

export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_LOADING = "FETCH_GAMES_LOADING";
export const FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR";

export const getFetchGamesLoadingAction = () => {
  return {
    type: FETCH_GAMES_LOADING,
  };
};

export const getFetchGamesErrorAction = (message) => {
  return {
    type: FETCH_GAMES_ERROR,
    payload: message,
  };
};

export const getFetchGamesSuccessAction = ({
  popularGames,
  newGames,
  upcomingGames,
}) => {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: { popularGames, newGames, upcomingGames },
  };
};

export const getFetchGamesAction = () => {
  return async (dispatch) => {
    dispatch(getFetchGamesLoadingAction());
    try {
      const popularGamesResponse = await rawgInstance.get(getPopularGamesUrl());
      const upcomingGamesResponse = await rawgInstance.get(
        getUpcomingGamesUrl()
      );
      const newGamesResponse = await rawgInstance.get(getNewGamesUrl());
      dispatch(
        getFetchGamesSuccessAction({
          popularGames: popularGamesResponse.data.results,
          upcomingGames: upcomingGamesResponse.data.results,
          newGames: newGamesResponse.data.results,
        })
      );
    } catch (error) {
      dispatch(getFetchGamesErrorAction(error.message));
    }
  };
};
