import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteSelectedEmployee,
  fetchEmployees,
} from "../redux/employee/empoyeeActions";

const EmployeeList = () => {
  const { employees } = useSelector((state) => state.employee);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="employees">
      <div className="employees__add">
        <button onClick={() => navigate("/add")}>Add Employee</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((e) => (
            <tr key={e.id}>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.salary}</td>
              <td>{e.date}</td>
              <td className="right-align">
                <button onClick={() => navigate(`/edit/${e.id}`)}>Edit</button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteSelectedEmployee(e.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
