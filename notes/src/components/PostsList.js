import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "../globalStyles";
import { getPostsAction } from "../redux/actions/postsActions";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside effect");
    dispatch(getPostsAction());
  }, []);

  return (
    <SectionContainer>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <>
          <h3>Total Posts :- {posts.length}</h3>
          {posts.map((post) => (
            <Card key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Card>
          ))}
        </>
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export default PostsList;
