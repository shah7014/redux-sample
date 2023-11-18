import React from "react";
import GlobalStyle, { Container } from "./globalStyles";
import AmountCards from "./components/AmountCards";
import ExpensesList from "./components/ExpensesList";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Redux_Budget</h1>
        <AmountCards />
        <ExpensesList />
      </Container>
    </>
  );
};

export default App;
