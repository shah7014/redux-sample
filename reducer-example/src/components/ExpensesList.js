import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { AppContext } from "../AppContext";
import { IconContext } from "react-icons";
import { getRemoveExpenseAction } from "../actions/budgetActions";

const ExpensesList = () => {
  const { expenses, dispatch } = useContext(AppContext);

  return (
    <div className="expenses">
      <h2>ExpensesList</h2>
      {expenses.length === 0 ? (
        <p className="expenses__empty">Add an expense to show here</p>
      ) : (
        <ul className="expenses__list">
          {expenses.map((e) => (
            <li key={e.id}>
              <p>
                {e.name} - {e.amt}
              </p>
              <IconContext.Provider value={{ color: "red", size: "1.5rem" }}>
                <IoIosClose
                  onClick={() => dispatch(getRemoveExpenseAction(e.id))}
                />
              </IconContext.Provider>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;
