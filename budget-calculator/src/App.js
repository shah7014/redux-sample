import React from "react";
import GlobalStyle, { Container } from "./globalStyles";
import AmountCards from "./components/AmountCards";
import ExpensesList from "./components/ExpensesList";
import NewExpense from "./components/NewExpense";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Redux_Budget</h1>
        <AmountCards />
        <ExpensesList />
        <NewExpense />
      </Container>
    </>
  );
};

export default App;
