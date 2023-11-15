import axiosInstance from "../../api";

export const UPDATE_QUERY_ID = "UPDATE_QUERY_ID";
export const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_POST_LOADING = "GET_POST_LOADING";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getUpdateQueryIdAction = (id) => {
  return { type: UPDATE_QUERY_ID, payload: id };
};

// THUNKS
export const getPostsByIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getPostLoadingAction());
      const res = await axiosInstance.get(`/${id}`);
      dispatch(getPostSuccessAction([res.data]));
    } catch (err) {
      dispatch(getPostFailureAction(err.message));
    }
  };
};
export const getAllPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getPostLoadingAction());
      const res = await axiosInstance.get("/");
      dispatch(getPostSuccessAction(res.data));
    } catch (err) {
      dispatch(getPostFailureAction(err.message));
    }
  };
};

export const getPostLoadingAction = (id) => {
  return { type: GET_POST_LOADING };
};

export const getPostSuccessAction = (posts) => {
  return { type: GET_POST_SUCCESS, payload: posts };
};

export const getPostFailureAction = (errorMessage) => {
  return { type: GET_POST_FAILURE, payload: errorMessage };
};
