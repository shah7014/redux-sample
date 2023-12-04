import moment from "moment";

const getCurrentDate = () => moment().format("YYYY-MM-DD");

const getPreviousDate = () => moment().subtract(1, "day").format("YYYY-MM-DD");

const getLastWeekDate = () => moment().subtract(7, "days").format("YYYY-MM-DD");

const getLastMonthlyDate = () =>
  moment().subtract(1, "month").format("YYYY-MM-DD");

const getVeryOldDate = () =>
  moment().subtract(50, "years").format("YYYY-MM-DD");

export const getWeeklyPopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getLastWeekDate()},${getCurrentDate()}`;

export const getMonthlyyPopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getLastMonthlyDate()},${getCurrentDate()}`;

export const getAllTimePopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getVeryOldDate()},${getCurrentDate()}`;

export const getPopulargamesForTodayUrl = () =>
  `/games?page_size=5&ordering=-rating&dates=${getVeryOldDate()},${getCurrentDate()}`;

export const getLatestgamesUrl = (pageno) =>
  `/games?page=${pageno}&page_size=20&ordering=-added`;
