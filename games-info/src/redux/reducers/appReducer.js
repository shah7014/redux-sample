import { SET_ERROR, SET_LOADING, SET_SHOW_MODAL } from "../actions/appActions";

const initialState = {
  isLoading: false,
  error: "",
  showModal: false,
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
    case SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
