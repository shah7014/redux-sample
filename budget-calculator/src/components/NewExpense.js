import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { v4 as UUID } from "uuid";
import { Button, Input, InputError } from "../globalStyles";
import { useDispatch } from "react-redux";
import { getAddExpenseAction } from "../redux/actions/expenseActions";

const NewExpense = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      cost: 0,
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const dispatch = useDispatch();

  const submitHandler = (data) => {
    const newExpense = { name: data.name, amt: data.cost, id: UUID() };
    dispatch(getAddExpenseAction(newExpense));
  };

  return (
    <>
      <FormTitle>Add Expense</FormTitle>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormInputs>
          <FormInputContainer>
            <label htmlFor="name">Name</label>
            <ExpenseInput
              autoComplete="off"
              type="text"
              id="name"
              {...register("name", {
                required: "Expense name is a required field",
              })}
            />
            {errors.name && <InputError>{errors.name.message}</InputError>}
          </FormInputContainer>
          <FormInputContainer>
            <label htmlFor="cost">Cost</label>
            <ExpenseInput
              type="number"
              id="cost"
              {...register("cost", {
                required: "Expense cost is a required field",
                min: {
                  value: 0,
                  message: "Minimum value of expense cost is 0",
                },
                valueAsNumber: true,
              })}
            />
            {errors.cost && <InputError>{errors.cost.message}</InputError>}
          </FormInputContainer>
        </FormInputs>
        <ButtonContainer>
          <Button>Save</Button>
        </ButtonContainer>
      </form>
    </>
  );
};

const FormTitle = styled.h2`
  margin: 1.5rem 0 1rem;
`;

const FormInputs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 40%;

  label {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ExpenseInput = styled(Input)`
  padding: 0.5rem 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export default NewExpense;
