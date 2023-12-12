import {
  SET_ERROR,
  SET_IS_LOADING,
  SET_SUCCESS,
  SET_THEME,
  TOGGLE_MOBILE_DRAWER,
} from "./appActions";

const initialState = {
  isMobileDrawerOpen: false,
  error: { open: false, message: "" },
  success: { open: false, message: "" },
  isLoading: false,
  theme: "light",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_DRAWER: {
      return {
        ...state,
        isMobileDrawerOpen: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: { open: action.payload.open, message: action.payload.message },
      };
    }
    case SET_SUCCESS: {
      return {
        ...state,
        success: { open: action.payload.open, message: action.payload.message },
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
