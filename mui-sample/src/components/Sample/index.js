import React from "react";
import { Grid, InputBase, Paper, Typography, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

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

const Sample = () => {
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
    </>
  );
};

export default Sample;
