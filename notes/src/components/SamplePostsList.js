import React, { useEffect } from "react";
import useCustomizedDispatch from "../useCustomizedDispatch";
import { getPostsAction } from "../redux/actions/postsActions";

const SamplePostsList = () => {
  const dispatch = useCustomizedDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <>
      <h2>SamplePostsList</h2>
    </>
  );
};

export default SamplePostsList;
