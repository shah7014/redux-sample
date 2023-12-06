import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
} from "../../config/employees.collection";
import {
  setAndHideSwalLoading,
  setAndShowSwalLoading,
  setShowFailure,
  setShowSuccess,
} from "../app/appActions";

export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_SELECTED_EMPLOYEE = "SET_SELECTED_EMPLOYEE";

export const setEmployees = (employees) => {
  return {
    type: SET_EMPLOYEES,
    payload: employees,
  };
};

export const setSelectedEmployee = (employee) => {
  return {
    type: SET_SELECTED_EMPLOYEE,
    payload: employee,
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
    dispatch(setShowSuccess(true, "Employees fetched Successfully"));
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error fetching Employees"));
  }
};

export const addEmployee = (data) => async (dispatch) => {
  try {
    dispatch(setAndShowSwalLoading());
    await createEmployee(data);
    dispatch(setAndHideSwalLoading());
    dispatch(setShowSuccess(true, "Employee added successfully"));
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error adding Employees"));
  }
};

export const fetchEmployee = (id) => async (dispatch) => {
  try {
    dispatch(setAndShowSwalLoading());
    const reponse = await getEmployee(id);
    if (!reponse.exists()) {
      throw "Document does not Exist";
    }
    dispatch(setSelectedEmployee({ id: reponse.id, ...reponse.data() }));
    dispatch(setAndHideSwalLoading());
    // dispatch(setShowSuccess(true, "Employee fetched successfully"));
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error fetching Employee with specified id"));
  }
};

export const updateSelectedEmployee = (id, data) => async (dispatch) => {
  try {
    dispatch(setAndShowSwalLoading());
    await updateEmployee(id, data);
    dispatch(setAndHideSwalLoading());
    dispatch(setShowSuccess(true, "Employee updated successfully"));
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error updating employee"));
  }
};

export const deleteSelectedEmployee = (id) => async (dispatch) => {
  try {
    dispatch(setAndShowSwalLoading());
    await deleteEmployee(id);
    dispatch(setAndHideSwalLoading());
    dispatch(setShowSuccess(true, "Employee deleted successfully"));
    dispatch(fetchEmployees());
  } catch (error) {
    dispatch(setAndHideSwalLoading());
    dispatch(setShowFailure(true, "Error deleting employee"));
  }
};
