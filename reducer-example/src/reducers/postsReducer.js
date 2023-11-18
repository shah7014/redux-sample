import {
  GET_POSTS_FAILURE,
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
} from "../actions/postsActions";

export const postsInitialState = {
  post: {},
  isLoading: false,
  error: "",
};

export const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        post: action.payload,
      };
    }
    case GET_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        post: {},
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
