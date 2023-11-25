import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getFilteredGames } from "../redux/actions/gameActions";

const SearchGame = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    dispatch(getFilteredGames(data.search));
  };

  return (
    <SearchForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("search")} />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  margin: 1rem 0 2rem;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border: 1px solid #000;
  width: 40%;
`;

const Button = styled.button`
  background: #e39bb1;
  color: #fff;
  padding: 0 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #ce4e75;
  }
`;

export default SearchGame;
