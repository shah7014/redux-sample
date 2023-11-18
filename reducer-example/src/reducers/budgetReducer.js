import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_BUDGET,
} from "../actions/budgetActions";

export const budgetInitialState = {
  budget: 2000,
  expenses: [
    { id: "1", name: "Education", amt: 200 },
    { id: "2", name: "Taxi Fare", amt: 20 },
    { id: "3", name: "Grocery", amt: 40 },
    { id: "4", name: "CLothes", amt: 40 },
    { id: "5", name: "Phone Bill", amt: 50 },
  ],
};

export const budgetReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BUDGET: {
      return {
        ...state,
        budget: action.payload,
      };
    }
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
    default: {
      return state;
    }
  }
};
