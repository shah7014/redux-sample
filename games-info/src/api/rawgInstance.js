import axios from "axios";

export const rawgInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

const getCurrentDate = () => {
  const d = new Date().getDate() + 1;
  if (d < 10) {
    return `0${d}`;
  } else {
    return d;
  }
};
const getCurrentMonth = () => {
  const m = new Date().getMonth() + 1;
  if (m < 10) {
    return `0${m}`;
  } else {
    return m;
  }
};

const getCurrentYear = () => new Date().getFullYear();

const getCurrentFormattedDate = () =>
  `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDate()}`;
const getLastYearFormattedDate = () =>
  `${getCurrentYear() - 1}-${getCurrentMonth()}-${getCurrentDate()}`;
const getNextYearFormattedDate = () =>
  `${getCurrentYear() + 1}-${getCurrentMonth()}-${getCurrentDate()}`;

export const getPopularGamesUrl = () =>
  `games?page_size=10&dates=${getLastYearFormattedDate()},${getCurrentFormattedDate()}&ordering=-rating`;

export const getUpcomingGamesUrl = () =>
  `games?page_size=10&dates=${getCurrentFormattedDate()},${getNextYearFormattedDate()}&ordering=-added`;

export const getNewGamesUrl = () =>
  `games?page_size=10&dates=${getLastYearFormattedDate()},${getCurrentFormattedDate()}&ordering=-released`;

export const getSelectedGameUrl = (id) => `games/${id}`;
