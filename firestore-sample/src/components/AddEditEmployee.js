import React from "react";
import { useForm } from "react-hook-form";
import {
  getEmailFieldValidation,
  getRequiredFieldValidation,
} from "../helpers/formValidations";

const AddEditEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      salary: "",
      date: "",
    },
  });

  const submitSuccessHandler = (data) => {
    console.log(data);
  };
  const submitFailureHandler = (errors) => {
    console.log(errors);
  };

  return (
    <div className="add-edit-employee">
      <h2>Add Employee</h2>
      <form
        noValidate
        onSubmit={handleSubmit(submitSuccessHandler, submitFailureHandler)}
      >
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
          <button type="submit">Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditEmployee;
