export const INIT_TODOS = "INIT_TODOS";
export const SET_TODOS = "SET_TODOS";

export const setTodos = (todos) => {
  return {
    type: SET_TODOS,
    payload: todos,
  };
};

export const initTodos = (todos) => {
  return {
    type: INIT_TODOS,
    payload: todos,
  };
};
