import { getAllEmployees } from "../../config/employees.collection";
import {
  setAndHideSwalLoading,
  setAndShowSwalLoading,
  setShowFailure,
  setShowSuccess,
} from "../app/appActions";

export const SET_EMPLOYEES = "SET_EMPLOYEES";

export const setEmployees = (employees) => {
  return {
    type: SET_EMPLOYEES,
    payload: employees,
  };
};

export const fetchEmployees = () => async (dispatch) => {
  try {
    dispatch(setAndShowSwalLoading());
    const employeesRes = await getAllEmployees();
    const fetchedEmployees = employeesRes.docs.map((e) => ({
      id: e.id,
      ...e.data(),
    }));
    dispatch(setEmployees(fetchedEmployees));
    dispatch(setAndHideSwalLoading());
    dispatch(setShowSuccess(true, "Employees Fetched Successfully"));
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error Fetching Employees"));
  }
};
