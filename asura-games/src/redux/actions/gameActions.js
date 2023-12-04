import {
  getAllTimePopularGamesUrl,
  getLatestgamesUrl,
  getMonthlyyPopularGamesUrl,
  getPopulargamesForTodayUrl,
  getWeeklyPopularGamesUrl,
} from "../../api/apiUrl";
import rawgInstance from "../../api/rawgInstance";

export const SET_POPULARITY_PERIOD = "SET_POPULARITY_PERIOD";
export const SET_POPULARITY_GAMES = "SET_POPULARITY_GAMES";
export const SET_POPULAR_TODAY_GAMES = "SET_POPULAR_TODAY_GAMES";
export const SET_LATEST_GAMES = "SET_LATEST_GAMES";

export const setPopularityPeriod = (timePeriod) => {
  return {
    type: SET_POPULARITY_PERIOD,
    payload: timePeriod,
  };
};

export const setPopularGames = (games) => {
  return {
    type: SET_POPULARITY_GAMES,
    payload: games,
  };
};

export const setPopluarGamesForToday = (games) => {
  return {
    type: SET_POPULAR_TODAY_GAMES,
    payload: games,
  };
};

export const setLatestGames = (games, pageNo) => {
  return {
    type: SET_LATEST_GAMES,
    payload: { games, pageNo },
  };
};

export const getGamesForTimePeriod = (timePeriod) => async (dispatch) => {
  dispatch(setPopularityPeriod(timePeriod));
  let apiUrl;
  if (timePeriod === "weekly") {
    apiUrl = getWeeklyPopularGamesUrl();
  } else if (timePeriod === "monthly") {
    apiUrl = getMonthlyyPopularGamesUrl();
  } else {
    apiUrl = getAllTimePopularGamesUrl();
  }
  try {
    const response = await rawgInstance.get(apiUrl);
    const games = response.data.results;
    dispatch(setPopularGames(games));
  } catch (error) {
    console.log(error.message);
  }
};

export const getPoularGamesForToday = () => async (dispatch) => {
  try {
    const response = await rawgInstance.get(getPopulargamesForTodayUrl());
    const games = response.data.results;
    dispatch(setPopluarGamesForToday(games));
  } catch (error) {
    console.log(error.message);
  }
};

export const getLatestGames = (direction, pageNo) => async (dispatch) => {
  try {
    const newPageNo = direction === "next" ? pageNo + 1 : pageNo - 1;
    const response = await rawgInstance.get(getLatestgamesUrl(newPageNo));
    const games = response.data.results;
    dispatch(setLatestGames(games, newPageNo));
  } catch (error) {
    console.log(error.message);
  }
};
