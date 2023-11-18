import React, { useEffect } from "react";
import { postsInitialState, postsReducer } from "../reducers/postsReducer";
import { getPostsAction } from "../actions/postsActions";
import useCustomizedReducer from "../useCustomizedReducers";

const SinglePost = () => {
  const [currentState, dispatch] = useCustomizedReducer(
    postsReducer,
    postsInitialState
  );

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <>
      <h2>SinglePost</h2>
      <p>Title:- {currentState.post?.title}</p>
      <p>Description:- {currentState.post?.body}</p>
    </>
  );
};

export default SinglePost;
