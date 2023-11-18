import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_BUDGET,
} from "../actions/expenseActions";

const expenseInitialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Shopping", amt: 200 },
    { id: 2, name: "Holiday", amt: 1000 },
    { id: 3, name: "Taxi", amt: 150 },
    { id: 4, name: "Education", amt: 2000 },
  ],
};

const expenseReducer = (state = expenseInitialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case REMOVE_EXPENSE: {
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      };
    }
    case UPDATE_BUDGET: {
      return {
        ...state,
        budget: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default expenseReducer;
