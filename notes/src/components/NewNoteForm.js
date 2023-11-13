import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { Button, SectionTitle } from "../globalStyles";
import { addNoteAction } from "../redux/actions/notesActions";

const NewNoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("Form Submission happened");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    // dispatching an action to addNote
    dispatch(addNoteAction({ ...data, id: uuidv4() }));
  };

  return (
    <>
      <NoteForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Add a Note</SectionTitle>
        <InputContainer>
          <Input
            {...register("title", { required: "Title is a required field" })}
            placeholder="Add Title"
          />
          {errors.title && <InputError>{errors.title.message}</InputError>}
        </InputContainer>
        <InputContainer>
          <Input
            {...register("content", {
              required: "Content is a required field",
            })}
            placeholder="Add content"
          />
          {errors.content && <InputError>{errors.content.message}</InputError>}
        </InputContainer>
        <SubmitButton type="submit">Add Note</SubmitButton>
      </NoteForm>
    </>
  );
};

const NoteForm = styled.form`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: none;
  outline: none;
  border: 1px solid #000;
  color: #000;
  width: 100%;
  /* border-radius: 0.25rem; */

  &:focus {
    background: #d1d1d1;
  }
`;

const InputError = styled.p`
  font-size: 0.75rem;
  color: red;
`;

const SubmitButton = styled(Button)`
  align-self: center;
  padding: 0.5rem;
`;

export default NewNoteForm;
