import { SET_EMPLOYEES, SET_SELECTED_EMPLOYEE } from "./empoyeeActions";

const initialState = {
  employees: [],
  selectedEmployee: {},
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: action.payload,
      };
    }
    case SET_SELECTED_EMPLOYEE: {
      return {
        ...state,
        selectedEmployee: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default employeeReducer;
