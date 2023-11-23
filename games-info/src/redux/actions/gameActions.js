import {
  rawgInstance,
  getPopularGamesUrl,
  getUpcomingGamesUrl,
  getNewGamesUrl,
  getSelectedGameUrl,
} from "../../api/rawgInstance";
import { setLoading, setError } from "./appActions";

export const SET_GAMES = "SET_GAMES";
export const SET_SELECTED_GAME = "SET_SELECTED_GAME";

export const setGames = ({ popularGames, newGames, upcomingGames }) => {
  return {
    type: SET_GAMES,
    payload: { popularGames, newGames, upcomingGames },
  };
};

export const setSelectedGame = (game) => {
  return {
    type: SET_SELECTED_GAME,
    payload: game,
  };
};

const setLoadingAndGames =
  ({ isLoading, popularGames, upcomingGames, newGames }) =>
  (dispatch) => {
    dispatch(setLoading(isLoading));
    dispatch(setGames({ popularGames, newGames, upcomingGames }));
  };

export const getGames = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const popularGamesResponse = await rawgInstance.get(getPopularGamesUrl());
    const upcomingGamesResponse = await rawgInstance.get(getUpcomingGamesUrl());
    const newGamesResponse = await rawgInstance.get(getNewGamesUrl());
    dispatch(
      setLoadingAndGames({
        isLoading: false,
        popularGames: popularGamesResponse.data.results,
        upcomingGames: upcomingGamesResponse.data.results,
        newGames: newGamesResponse.data.results,
      })
    );
  } catch (error) {
    dispatch(setError(error.message));
  }
};

const setLoadingAndGame = (isLoading, selectedGame) => (dispatch) => {
  dispatch(setLoading(isLoading));
  dispatch(setSelectedGame(selectedGame));
};

export const getGameById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await rawgInstance.get(getSelectedGameUrl(id));
    dispatch(setLoadingAndGame(false, res.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
