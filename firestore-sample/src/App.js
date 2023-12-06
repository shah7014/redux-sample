import React from "react";
import "./App.scss";
import EmployeeList from "./components/EmployeeList";
import Notifications from "./components/Notifications";
import { Route, Routes } from "react-router-dom";
import AddEditEmployee from "./components/AddEditEmployee";

const App = () => {
  return (
    <>
      <Notifications />
      <div className="container">
        <h1>Employee Management System</h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEditEmployee />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
