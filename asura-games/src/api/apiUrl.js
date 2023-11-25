const getFormattedDoubleDigitvalue = (a) => {
  return a < 10 ? `0${a}` : a;
};
const getDate = () => {
  return new Date().getDate();
};

const getMonth = () => {
  return new Date().getMonth() + 1;
};

const getYear = () => {
  return new Date().getFullYear();
};

const getTodayFormattedDate = () => {
  return `${getYear()}-${getFormattedDoubleDigitvalue(
    getMonth()
  )}-${getFormattedDoubleDigitvalue(getDate())}`;
};

const getPastWeekFormattedDate = () => {
  return `${getYear()}-${getFormattedDoubleDigitvalue(
    getMonth()
  )}-${getFormattedDoubleDigitvalue(getDate() - 7)}`;
};

const getPastMonthFormattedDate = () => {
  return `${getYear()}-${getFormattedDoubleDigitvalue(
    getMonth() - 1
  )}-${getFormattedDoubleDigitvalue(getDate())}`;
};

const getVeryOldFormattedDate = () => {
  return `${getYear() - 50}-${getFormattedDoubleDigitvalue(
    getMonth()
  )}-${getFormattedDoubleDigitvalue(getDate())}`;
};

export const getWeeklyPopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getPastWeekFormattedDate()},${getTodayFormattedDate()}`;
export const getMonthlyyPopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getPastMonthFormattedDate()},${getTodayFormattedDate()}`;
export const getAllTimePopularGamesUrl = () =>
  `/games?page_size=10&ordering=-rating&dates=${getVeryOldFormattedDate()},${getTodayFormattedDate()}`;
