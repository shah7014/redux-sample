import { Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

export const PageHeader = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "16px" }}>
      {title}
    </Typography>
  );
};
