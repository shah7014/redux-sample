import {
  Box,
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import employees from "../../firebase/employees.collection";

const headCells = [
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Email Id (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
];

const itemsPerPage = 3;

const SamplePaginatedTable = () => {
  const [totalRecords, setTotalRecords] = useState(0);

  const [data, setData] = useState([]);

  const [pageNo, setPageNo] = useState(0);

  const [firstVisible, setFirstVisible] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);

  const getEmployees = async (side = "next") => {
    try {
      let res;
      if (side === "next") {
        res = await employees.getNextPaginatedData(
          lastVisible,
          itemsPerPage,
          "asc",
          "fullName"
        );
      } else {
        console.log("BACK");
        res = await employees.getPrevPaginatedData(
          firstVisible,
          itemsPerPage,
          "asc",
          "fullName"
        );
        console.log("RESPONSE:- ", res);
      }
      setData(res.docs.map((d) => d.data()));
      setLastVisible(res.docs[res.docs.length - 1]);
      setFirstVisible(res.docs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCount = async () => {
      try {
        const c = await employees.getCountOfEmployees();
        setTotalRecords(c);
        console.log("COUNT:- ", c);
      } catch (error) {
        console.log(error);
      }
    };

    getCount();

    getEmployees();
  }, []);

  const pageChangeHandler = (side) => (e) => {
    if (side === "back") {
      getEmployees("back");
      setPageNo((p) => p - 1);
    } else {
      getEmployees("next");
      setPageNo((p) => p + 1);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ margin: "24px", padding: "24px" }}
      >
        <TableHead>
          <TableRow>
            {headCells.map((h) => (
              <TableCell key={h.value}>{h.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((d) => (
            <TableRow key={d.email}>
              <TableCell>{d.fullName}</TableCell>
              <TableCell>{d.email}</TableCell>
              <TableCell>{d.mobile}</TableCell>
              <TableCell>{d.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Box sx={{ marginTop: "16px" }}>
          <Button
            variant="contained"
            disabled={pageNo === 0}
            onClick={pageChangeHandler("back")}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "16px" }}
            disabled={
              !totalRecords || Math.floor(totalRecords / itemsPerPage) <= pageNo
            }
            onClick={pageChangeHandler("next")}
          >
            Next
          </Button>
        </Box>
      </TableContainer>
    </>
  );
};

export default SamplePaginatedTable;
