import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_BUDGET,
} from "../actions/expenseActions";

const expenseInitialState = {
  budget: 2000,
  expenses: [],
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
