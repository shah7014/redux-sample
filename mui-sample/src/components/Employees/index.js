import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Tab, Tabs } from "@mui/material";
import NewEmployeeForm from "./NewEmployeeForm";
import { setTabSelected } from "../../redux/employee/employeesAction";
import { tab } from "@testing-library/user-event/dist/tab";
import EmployeesList from "./EmployeesList";

const Employees = () => {
  const { tabSelecetd } = useSelector((state) => state.employee);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setTabSelected(newValue));
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabSelecetd} onChange={handleChange}>
          <Tab label="Employees" />
          <Tab label="Create Employee" />
        </Tabs>
      </Box>
      <div role="tabpanel" hidden={tabSelecetd !== 0}>
        {tabSelecetd === 0 && <EmployeesList />}
      </div>
      <div role="tabpanel" hidden={tabSelecetd !== 1}>
        {tabSelecetd === 1 && <NewEmployeeForm />}
      </div>
    </>
  );
};

export default Employees;
