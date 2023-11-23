export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message,
  };
};

export const setShowModal = (message) => {
  return {
    type: SET_SHOW_MODAL,
    payload: message,
  };
};
