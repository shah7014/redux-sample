import {
  ListAltOutlined as ListAltOutlinedIcon,
  People as PeopleIcon,
  School as SchoolIcon,
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
      <StyledLink to="/employees">
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees"></ListItemText>
        </ListItemButton>
      </StyledLink>
    </ListItem>
    <ListItem>
      <StyledLink to="/sample">
        <ListItemButton>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Sample"></ListItemText>
        </ListItemButton>
      </StyledLink>
    </ListItem>
  </List>
);
