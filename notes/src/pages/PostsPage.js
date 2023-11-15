import React from "react";
import PostsQuery from "../components/PostsQuery";
import PostsList from "../components/PostsList";

const PostsPage = () => {
  return (
    <>
      <PostsQuery />
      <PostsList />
    </>
  );
};

export default PostsPage;
