import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedSortedEmployees } from "../../redux/employee/employeesAction";

const headCells = [
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Email Id (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
];

const StyledTable = styled(Table)(({ theme }) => ({
  "& thead": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& thead th": {
    color: theme.palette.secondary.contrastText,
    fontWeight: "600",
  },
  "& tbody td": {
    fontWeight: "300",
  },
  "& tbody tr:hover": {
    // backgroundColor: "#fffbf2",
    // cursor: "pointer",
  },
}));

const EmployeesList = () => {
  const { employees } = useSelector((state) => state.employee);

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("fullName");

  useEffect(() => {
    console.log("Page No:- ", page);
    dispatch(getPaginatedSortedEmployees(page, order, orderBy, rowsPerPage));
  }, [dispatch, page, order, orderBy, rowsPerPage]);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const sortHandler = (headId) => (e) => {
    setOrder(headId === orderBy && order === "asc" ? "desc" : "asc");
    setOrderBy(headId);
  };

  return (
    <Paper sx={{ margin: "48px 24px", padding: "24px" }}>
      <StyledTable>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            {headCells.map((h) => (
              <TableCell key={h.id}>
                <TableSortLabel
                  active={h.id === orderBy}
                  direction={h.id === orderBy ? order : "asc"}
                  onClick={sortHandler(h.id)}
                >
                  {h.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {employees.map((e) => (
            <TableRow key={e.id}>
              <TableCell>{e.fullName}</TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.mobile}</TableCell>
              <TableCell>{e.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      {/* Table Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
        count={-1}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={pageChangeHandler}
        onRowsPerPageChange={rowsPerPageChangeHandler}
      />
    </Paper>
  );
};

export default EmployeesList;
