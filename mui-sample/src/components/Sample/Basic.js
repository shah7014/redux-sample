import React, { useState } from "react";
import {
  Box,
  Grid,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  styled,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import useTable from "../global/useTable";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const headCells = [
  { label: "Name", value: "name" },
  { label: "Calories", value: "calories" },
  { label: "Fat", value: "fat" },
  { label: "Carbs", value: "carbs" },
  { label: "Protein", value: "protein" },
];

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Pizza Bread", 400, 30.0, 52, 3.0),
  createData("Garlic Bread", 342, 23.0, 65, 2.3),
  createData("Normal Bread", 356, 16.0, 49, 3.9),
  createData("Green Pasta", 300, 18.0, 34, 4.0),
  createData("Biscoff", 350, 18.0, 47, 2.9),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: "8px",
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
  "& input": {
    padding: theme.spacing(1),
    // border: "1px solid #000",
  },
  "& .MuiSvgIcon-root": {
    marginLeft: theme.spacing(1),
  },
}));

const Basic = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("");

  const { Tbl, TblHeader, TblBody, TblPagination, sortedAndPaginatedRecords } =
    useTable(headCells, rows, [5, 8, 10, 15]);

  const pageChangeHandler = (e, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  const createSortHandler = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const ascendingComparator = (a, b, property) => {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  };

  const getSortingComparator = (order, property) => {
    return order === "asc"
      ? (a, b) => ascendingComparator(a, b, property)
      : (a, b) => -ascendingComparator(a, b, property);
  };

  return (
    <>
      <Typography variant="h6">Employees</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Item>xs=12 md=8</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            xs={12} md={4}
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            xs={6} md={4}
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            xs={6} md={8}
          </Item>
        </Grid>
      </Grid>
      <StyledInput
        placeholder="type something..."
        startAdornment={<SearchIcon />}
      />

      <Paper sx={{ margin: "24px", padding: "16px" }}>
        <Tbl>
          {/* <TableHead>
            <TableRow>
              {headCells.map((h) => (
                <TableCell>
                  <TableSortLabel
                    active={orderBy === h.value}
                    direction={orderBy === h.value ? order : "asc"}
                    onClick={createSortHandler(h.value)}
                  >
                    {h.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead> */}
          <TblHeader />

          <TableBody>
            {/* {rows
              .sort(getSortingComparator(order, orderBy))
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((r) => (
                <TableRow>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.calories}</TableCell>
                  <TableCell>{r.fat}</TableCell>
                  <TableCell>{r.carbs}</TableCell>
                  <TableCell>{r.protein}</TableCell>
                </TableRow>
              ))} */}
            {sortedAndPaginatedRecords.map((r) => (
              <TableRow>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.calories}</TableCell>
                <TableCell>{r.fat}</TableCell>
                <TableCell>{r.carbs}</TableCell>
                <TableCell>{r.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tbl>
        {/* <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "8px",
          }}
        >
          <TablePagination
            count={rows.length}
            rowsPerPageOptions={[5, 8, 12]}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={pageChangeHandler}
            onRowsPerPageChange={rowsPerPageChangeHandler}
          />
        </Stack> */}
        <TblPagination />
      </Paper>
    </>
  );
};

export default Basic;
