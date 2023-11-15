import React from "react";
import styled from "styled-components";
import { Button, Container, Input, InputError } from "../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getPostsAction,
  getUpdateQueryIdAction,
} from "../redux/actions/postsActions";

const PostsQuery = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const queryId = useSelector((state) => state.posts.queryId);

  const dispatch = useDispatch();

  const queryIdChangeHandler = (e) => {
    dispatch(getUpdateQueryIdAction(e.target.value));
  };

  const submitHandler = (e) => {
    dispatch(getPostsAction(queryId));
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <h3>Search Post By Id</h3>
          <Input
            {...register("queryId")}
            value={queryId}
            onChange={queryIdChangeHandler}
          />
          {/* {errors.queryId && <InputError>{errors.queryId.message}</InputError>} */}
          <FormButton>Search</FormButton>
        </Form>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  background: #ffdaec;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormButton = styled(Button)`
  align-self: flex-start;
`;

export default PostsQuery;
