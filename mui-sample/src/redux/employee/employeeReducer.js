import {
  SET_EMPLOYEES,
  SET_FIRST_EMPLOYEE_PROP,
  SET_LAST_EMPLOYEE_PROP,
  SET_TAB_SELECTED,
} from "./employeesAction";

const intialState = {
  employees: [],
  firstEmployeeProp: {},
  lastEmployeeProp: {},
  tabSelecetd: 0,
};

const employeeReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: action.payload,
      };
    }
    case SET_TAB_SELECTED: {
      return {
        ...state,
        tabSelecetd: action.payload,
      };
    }
    case SET_LAST_EMPLOYEE_PROP: {
      return {
        ...state,
        lastEmployeeProp: action.payload,
      };
    }
    case SET_FIRST_EMPLOYEE_PROP: {
      return {
        ...state,
        firstEmployeeProp: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default employeeReducer;
