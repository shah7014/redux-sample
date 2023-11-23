import { SET_ERROR, SET_LOADING } from "../actions/appActions";

const initialState = {
  isLoading: false,
  error: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
