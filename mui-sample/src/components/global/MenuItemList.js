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
} from "@mui/material";
import { StyledLink } from "./common";

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
