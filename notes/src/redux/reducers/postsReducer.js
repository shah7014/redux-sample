import {
  GET_POST_FAILURE,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPDATE_QUERY_ID,
} from "../actions/postsActions";

const postsInitialState = {
  queryId: "",
  posts: [],
  isLoading: false,
  error: "",
};

const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY_ID: {
      return {
        ...state,
        queryId: action.payload,
      };
    }
    case GET_POST_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        posts: action.payload,
      };
    }
    case GET_POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        posts: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
