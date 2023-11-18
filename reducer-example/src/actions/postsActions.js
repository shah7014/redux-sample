import axios from "axios";

export const GET_POSTS_STARTED = "GET_POSTS_STARTED";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPostsStartedAction = () => {
  return {
    type: GET_POSTS_STARTED,
  };
};

export const getPostsSuccessAction = (post) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: post,
  };
};

export const getPostsFailureAction = (message) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: message,
  };
};

export const getPostsAction = () => {
  return async (dispatch) => {
    dispatch(getPostsStartedAction());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = response.data;
      dispatch(getPostsSuccessAction(data));
    } catch (error) {
      dispatch(getPostsFailureAction(error.message));
    }
  };
};
