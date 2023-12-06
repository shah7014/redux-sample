import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getEmailFieldValidation,
  getRequiredFieldValidation,
} from "../helpers/formValidations";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  fetchEmployee,
  updateSelectedEmployee,
} from "../redux/employee/empoyeeActions";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../config/employees.collection";

const AddEditEmployee = () => {
  const { selectedEmployee } = useSelector((state) => state.employee);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      salary: "",
      date: "",
    },
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id: employeeId } = useParams();

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate("/");
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (employeeId) {
      dispatch(fetchEmployee(employeeId));
    }
  }, [employeeId]);

  useEffect(() => {
    const setValueForField = (field, value) => {
      setValue(field, value, {
        shouldValidate: true,
      });
    };

    if (Object.keys(selectedEmployee)?.length > 0) {
      setValueForField("firstName", selectedEmployee.firstName);
      setValueForField("lastName", selectedEmployee.lastName);
      setValueForField("email", selectedEmployee.email);
      setValueForField("salary", selectedEmployee.salary);
    }
  }, [selectedEmployee]);

  const submitSuccessHandler = (data) => {
    const getZeroPreponded = (d) => (d < 10 ? `0${d}` : d);

    const newEmployee = {
      ...data,
      date: `${data.date.getFullYear()}-${getZeroPreponded(
        data.date.getMonth() + 1
      )}-${getZeroPreponded(data.date.getDate())}`,
    };

    console.log(newEmployee);

    if (employeeId) {
      dispatch(updateSelectedEmployee(employeeId, newEmployee));
      return;
    }
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className="add-edit-employee">
      <h2>Add Employee</h2>
      <form noValidate onSubmit={handleSubmit(submitSuccessHandler)}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", getRequiredFieldValidation("First Name"))}
          />
          {errors.firstName && (
            <p className="form-error">{errors.firstName.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", getRequiredFieldValidation("Last Name"))}
          />
          {errors.lastName && (
            <p className="form-error">{errors.lastName.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", getEmailFieldValidation())}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            {...register("salary", {
              valueAsNumber: true,
              ...getRequiredFieldValidation("Salary"),
              min: {
                value: 0,
                message: "Minimum value of salary is 0",
              },
            })}
          />
          {errors.salary && (
            <p className="form-error">{errors.salary.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
              ...getRequiredFieldValidation("Date"),
            })}
          />
          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>
        <div className="form-actions">
          <button type="submit">{employeeId ? "Edit" : "Add"}</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditEmployee;
