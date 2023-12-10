import {
  ListAltOutlined as ListAltOutlinedIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

export const MenuItemList = () => (
  <List>
    <ListItem>
      <StyledLink to="/">
        <ListItemButton>
          <ListItemIcon>
            <ListAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Todos"></ListItemText>
        </ListItemButton>
      </StyledLink>
    </ListItem>
    <ListItem>
      <StyledLink to="/">
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees"></ListItemText>
        </ListItemButton>
      </StyledLink>
    </ListItem>
  </List>
);

export const PageHeader = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "16px" }}>
      {title}
    </Typography>
  );
};
