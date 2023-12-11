export const TOGGLE_MOBILE_DRAWER = "TOGGLE_MOBILE_DRAWER";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const toggleMobileDrawer = (open) => {
  return {
    type: TOGGLE_MOBILE_DRAWER,
    payload: open,
  };
};

export const setError = (open, message) => {
  return {
    type: SET_ERROR,
    payload: { open, message: open ? message : "" },
  };
};

export const setSuccess = (open, message) => {
  return {
    type: SET_SUCCESS,
    payload: { open, message: open ? message : "" },
  };
};

export const setIsLoading = (show) => {
  return {
    type: SET_IS_LOADING,
    payload: show,
  };
};
