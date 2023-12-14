import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  styled,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

const StyledTable = styled(Table)(({ theme }) => ({
  "& thead": {
    backgroundColor: theme.palette.secondary.dark,

    "& th": {
      color: theme.palette.secondary.contrastText,
    },
  },

  "& tbody td": {
    fontWeight: "400",
  },
}));

const useTable = (headeCells, records, rowsPerPgeOptions) => {
  const [order, setOrder] = useState("asc");

  const [orderby, setOrderBy] = useState("");

  const [pageNo, setPageNo] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPgeOptions[0]);

  const pageChangeHandler = (e, newPage) => {
    setPageNo(newPage);
  };

  const rowsPerPageChangeHandler = (e) => {
    setRowsPerPage(e.target.value);
  };

  const sortClickHandler = (property) => (event) => {
    setOrder(property === orderby && order === "asc" ? "desc" : "asc");
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

  const Tbl = (props) => {
    return <StyledTable>{props.children}</StyledTable>;
  };

  const TblHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {headeCells.map((h) => (
            <TableCell kry={h.value}>
              <TableSortLabel
                direction={h.value === orderby ? order : "asc"}
                active={h.value === orderby}
                onClick={sortClickHandler(h.value)}
              >
                {h.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblBody = () => {
    return <TableBody></TableBody>;
  };

  const TblPagination = () => {
    return (
      <TablePagination
        rowsPerPageOptions={rowsPerPgeOptions}
        page={pageNo}
        rowsPerPage={rowsPerPage}
        count={records.length}
        onPageChange={pageChangeHandler}
        onRowsPerPageChange={rowsPerPageChangeHandler}
      />
    );
  };

  const sortedAndPaginatedRecords = useMemo(() => {
    return records
      .sort(getSortingComparator(order, orderby))
      .slice(rowsPerPage * pageNo, rowsPerPage * (pageNo + 1));
  }, [order, orderby, pageNo, rowsPerPage, records]);

  return { Tbl, TblHeader, TblBody, TblPagination, sortedAndPaginatedRecords };
};

export default useTable;
