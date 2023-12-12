import { Typography, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&.active": {
    color: "#7b1fa2",
  },
}));

export const PageHeader = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "16px" }}>
      {title}
    </Typography>
  );
};
