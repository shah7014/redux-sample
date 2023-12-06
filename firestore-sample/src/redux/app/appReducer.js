import {
  SET_IS_LOADING,
  SET_SHOW_FAILURE,
  SET_SHOW_SUCCESS,
} from "./appActions";

const initialState = {
  isLoading: false,
  success: { show: false, message: "" },
  failure: { show: false, message: "" },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_SHOW_SUCCESS: {
      return {
        ...state,
        success: { show: action.payload.show, message: action.payload.message },
      };
    }
    case SET_SHOW_FAILURE: {
      return {
        ...state,
        failure: {
          show: action.payload.show,
          message: action.payload.message,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
