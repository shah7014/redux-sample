import { hideLoading, startLoading } from "../../helpers/loader";

export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_SHOW_SUCCESS = "SET_SHOW_SUCCESS";
export const SET_SHOW_FAILURE = "SET_SHOW_FAILURE";

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
};

export const setShowSuccess = (show, message = "") => {
  return {
    type: SET_SHOW_SUCCESS,
    payload: { show, message },
  };
};

export const setShowFailure = (show, message = "") => {
  return {
    type: SET_SHOW_FAILURE,
    payload: { show, message },
  };
};

export const setAndShowSwalLoading = () => (dispatch) => {
  startLoading();
  dispatch(setIsLoading(true));
};

export const setAndHideSwalLoading = () => (dispatch) => {
  hideLoading();
  dispatch(setIsLoading(false));
};
