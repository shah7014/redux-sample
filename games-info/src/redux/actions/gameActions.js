import {
  rawgInstance,
  getPopularGamesUrl,
  getUpcomingGamesUrl,
  getNewGamesUrl,
  getSelectedGameUrl,
  getSelectedGameScreenshotsUrl,
  getFilterdGameUrl,
} from "../../api/rawgInstance";
import { setLoading, setError, setShowModal } from "./appActions";

export const SET_GAMES = "SET_GAMES";
export const SET_SELECTED_GAME = "SET_SELECTED_GAME";
export const SET_FILTERED_GAMES = "SET_FILTERED_GAMES";
export const REMOVE_FILTERED_GAMES = "REMOVE_FILTERED_GAMES";

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

export const setFilteredGames = (games) => {
  return {
    type: SET_FILTERED_GAMES,
    payload: games,
  };
};

export const removeFilteredGames = () => {
  return {
    type: REMOVE_FILTERED_GAMES,
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
  //  show the modal with the game
  dispatch(setShowModal(true));
};

export const getGameById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await rawgInstance.get(getSelectedGameUrl(id));
    const screenshotRes = await rawgInstance.get(
      getSelectedGameScreenshotsUrl(id)
    );
    const selectedGame = { ...res.data, screenshots: screenshotRes.data };
    dispatch(setLoadingAndGame(false, selectedGame));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getFilteredGames = (searchText) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await rawgInstance.get(getFilterdGameUrl(searchText));
    const games = response.data.results;
    dispatch(setFilteredGames(games));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
