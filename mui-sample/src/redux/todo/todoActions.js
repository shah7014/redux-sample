import { todos } from "../../firebase/todos.collection";
import { setError, setIsLoading, setSuccess } from "../app/appActions";

export const SET_TODOS = "SET_TODOS";

export const setTodos = (todos) => {
  return {
    type: SET_TODOS,
    payload: todos,
  };
};

export const getAllTodos = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const data = await todos.getAll();
    dispatch(setTodos(data));
    dispatch(setSuccess(true, "Todos fetched successfully"));
  } catch (error) {
    dispatch(setError(true, "Error fetching todos"));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const initTodos = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    await todos.initWithRandomData();
    dispatch(getAllTodos());
  } catch (error) {
    dispatch(setError(true, "Error initializing random todos"));
  }
};

export const setSuccessAndReload = (message) => (dispatch) => {
  dispatch(setIsLoading(false));
  dispatch(setSuccess(true, message));
  dispatch(getAllTodos());
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const a = await todos.create(todo);
    console.log("ID:- ", a.id);
    dispatch(setSuccessAndReload("Todo created successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error creating a todo"));
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    await todos.update(id, data);
    dispatch(setSuccessAndReload("Todo updated successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error updating a todo"));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    await todos.remove(id);
    dispatch(setSuccessAndReload("Todo deleted successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error deleting a todo"));
  }
};
