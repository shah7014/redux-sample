import {
  getAllTimePopularGamesUrl,
  getMonthlyyPopularGamesUrl,
  getWeeklyPopularGamesUrl,
} from "../../api/apiUrl";
import rawgInstance from "../../api/rawgInstance";

export const SET_POPULARITY_PERIOD = "SET_POPULARITY_PERIOD";
export const SET_POPULARITY_GAMES = "SET_POPULARITY_GAMES";

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
