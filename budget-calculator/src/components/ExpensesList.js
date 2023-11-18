import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Card, Input } from "../globalStyles";
import { getRemoveExpenseAction } from "../redux/actions/expenseActions";

const ExpensesList = () => {
  const expenses = useSelector((state) => state.expenses);

  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");

  const filteredExpenses = useMemo(() => {
    return expenses.filter((e) => e.name.includes(filterText));
  }, [expenses, filterText]);

  const expenseRemoveHandler = (id) => {
    dispatch(getRemoveExpenseAction(id));
  };

  return (
    <Section>
      <h2>Expenses</h2>
      <div>
        {expenses.length === 0 ? (
          <p>Add an expense to show here</p>
        ) : (
          <>
            <SearchExpenseInput
              placeholder="Type to search..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />

            {filteredExpenses.map((e) => (
              <ExpenseCard key={e.id}>
                <p>{e.name}</p>
                <ExpenseActions>
                  <Amount>{e.amt}</Amount>
                  <RemoveButton onClick={() => expenseRemoveHandler(e.id)}>
                    Remove
                  </RemoveButton>
                </ExpenseActions>
              </ExpenseCard>
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const SearchExpenseInput = styled(Input)`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ExpenseCard = styled(Card)`
  padding: 0.75rem;
  border: 1px solid #e1e1e1;
`;

const Amount = styled.div`
  border-radius: 5rem;
  background: #4a4ad3;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

const ExpenseActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RemoveButton = styled(Button)`
  background: #ff1515;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

export default ExpensesList;
