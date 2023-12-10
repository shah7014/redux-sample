import { SET_TODOS } from "./todoActions";

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
