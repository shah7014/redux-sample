import employees from "../../firebase/employees.collection";
import { setError, setIsLoading, setSuccess } from "../app/appActions";

export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_TAB_SELECTED = "SET_TAB_SELECTED";
export const SET_LAST_EMPLOYEE_PROP = "SET_LAST_EMPLOYEE_PROP";
export const SET_FIRST_EMPLOYEE_PROP = "SET_FIRST_EMPLOYEE_PROP";

export const setEmployees = (data) => {
  return {
    type: SET_EMPLOYEES,
    payload: data,
  };
};

export const setTabSelected = (tabIndex) => {
  return {
    type: SET_TAB_SELECTED,
    payload: tabIndex,
  };
};

export const setLastEmployeeProp = (data) => {
  return {
    type: SET_LAST_EMPLOYEE_PROP,
    payload: data,
  };
};

export const setFirstEmployeeProp = (data) => {
  return {
    type: SET_FIRST_EMPLOYEE_PROP,
    payload: data,
  };
};

export const getAllEmployees = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const data = await employees.getAll();
    dispatch(setEmployees(data));
    dispatch(setSuccess(true, "Employees fetched successfully"));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error fetching employees"));
  }
};

export const setSuccessAndReload = (message) => (dispatch) => {
  dispatch(setIsLoading(false));
  dispatch(setSuccess(true, message));
  dispatch(getAllEmployees());
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const a = await employees.create(employee);
    console.log("ID:- ", a.id);
    dispatch(setSuccessAndReload("Employee created successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error creating a employee"));
  }
};

export const updateEmployee = (id, data) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    await employees.update(id, data);
    dispatch(setSuccessAndReload("Employee updated successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error updating a Employee"));
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    await employees.remove(id);
    dispatch(setSuccessAndReload("Employee deleted successfully"));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true, "Error deleting a Employees"));
  }
};

export const getPaginatedSortedEmployees =
  (pageDirection, order, orderBy, rows) => async (dispatch, getState) => {
    try {
      dispatch(setIsLoading(true));
      const { docs, firstDoc, lastDoc } =
        await employees.getPaginatedAndSortedEmployees(
          pageDirection,
          order,
          orderBy,
          rows,
          getState()
        );
      dispatch(setEmployees(docs));
      dispatch(setLastEmployeeProp(lastDoc));
      dispatch(setFirstEmployeeProp(firstDoc));
      dispatch(setSuccess(true, "Employees fetched successfully"));
    } catch (error) {
      dispatch(setError(false, "Error fetching employees"));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
