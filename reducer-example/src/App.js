import React from "react";
import "./App.css";
import Count from "./components/Count";
import SinglePost from "./components/SinglePost";
import Budget from "./components/Budget";
import AppContextProvider from "./AppContext";
import ExpensesList from "./components/ExpensesList";

const App = () => {
  return (
    <div className="container">
      {/* <h1>Learning...</h1> */}
      {/* <Count /> */}
      {/* <SinglePost /> */}
      <AppContextProvider>
        <h1>My Budget</h1>
        <Budget />
        <ExpensesList />
      </AppContextProvider>
    </div>
  );
};

export default App;
