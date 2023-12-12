import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import NewEmployeeForm from "./NewEmployeeForm";

const Employees = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Employees" />
          <Tab label="Create Employee" />
        </Tabs>
      </Box>
      <div role="tabpanel" hidden={value !== 0}>
        {value === 0 && <h1>Employees List</h1>}
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        {value === 1 && <NewEmployeeForm />}
      </div>
    </>
  );
};

export default Employees;
