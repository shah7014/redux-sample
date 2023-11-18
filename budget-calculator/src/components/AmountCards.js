import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Card, Input, InputError } from "../globalStyles";
import { getUpdateBudgetAction } from "../redux/actions/expenseActions";

const AmountCards = () => {
  const [isEdit, setIsEdit] = useState(false);

  const budget = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expenses);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      budget,
    },
  });

  const totalExpentAmount = useMemo(() => {
    return expenses
      .map((e) => +e.amt)
      .reduce((acc, currVal) => acc + currVal, 0);
  }, [expenses]);

  const submitHandler = (data) => {
    console.log(data);
    dispatch(getUpdateBudgetAction(data.budget));
    setIsEdit(false);
  };

  return (
    <Section>
      <AmountCard $bg={"#c1c1c1"}>
        {!isEdit && (
          <p>
            <span>Budget: </span>
            {budget}
          </p>
        )}
        {isEdit && (
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <BudgetInput
                type="number"
                {...register("budget", {
                  min: {
                    value: 0,
                    message: "Minimum value is 0",
                  },
                  valueAsNumber: true,
                })}
              />
              {errors.budget && (
                <InputError>{errors.budget.message}</InputError>
              )}
            </div>
            <BudgetButton>Save</BudgetButton>
          </form>
        )}
        {!isEdit && (
          <BudgetButton onClick={() => setIsEdit(true)}>Edit</BudgetButton>
        )}
      </AmountCard>
      <AmountCard $bg={"#65e491"}>
        <p>
          <span>Remaining: </span>
          {budget - totalExpentAmount}
        </p>
      </AmountCard>
      <AmountCard $bg={"#89c8ff"}>
        <p>
          <span>Spent so far: </span>
          {totalExpentAmount}
        </p>
      </AmountCard>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  p {
    span {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AmountCard = styled(Card)`
  width: calc(33% - 2rem);

  form {
    display: flex;
    justify-content: space-between;

    button {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BudgetInput = styled(Input)`
  padding: 0.25rem;
  width: 80%;
`;

const BudgetButton = styled(Button)`
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  border: none;
`;

export default AmountCards;
