export const UPDATE_BUDGET = "UPDATE_BUDGET";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

export const getUpdateBudgetAction = (newBudget) => {
  return {
    type: UPDATE_BUDGET,
    payload: newBudget,
  };
};

export const getAddExpenseAction = (newExpense) => {
  return {
    type: ADD_EXPENSE,
    payload: newExpense,
  };
};

export const getRemoveExpenseAction = (id) => {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
};
