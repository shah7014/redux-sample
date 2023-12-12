import { Factory as FactoryIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { MenuItemList } from "../global/MenuItemList";
import DarkModeSwitch from "./DarkModeSwitch";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleMobileDrawer } from "../../redux/app/appActions";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const NavBar = () => {
  const drawerWidth = 240;

  const { isMobileDrawerOpen, theme } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handleToggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Shift" || event.key === "Tab")
    ) {
      return;
    }
    dispatch(toggleMobileDrawer(open));
  };

  const themeChangeHandler = (e) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
        <StyledToolbar>
          <MenuIcon
            sx={{ cursor: "pointer", display: { xs: "block", sm: "none" } }}
            onClick={handleToggleDrawer(true)}
          />
          <Stack
            sx={{ flexDirection: "row", gap: "16px", alignItems: "center" }}
          >
            <FactoryIcon />
            <Typography variant="h5">Mui Sample</Typography>
          </Stack>
          <DarkModeSwitch
            checked={theme === "dark"}
            onChange={themeChangeHandler}
          />
        </StyledToolbar>
      </AppBar>

      {/* small screen drawer */}
      <Drawer
        variant="temporary"
        open={isMobileDrawerOpen}
        onClose={handleToggleDrawer(false)}
        onKeyDown={handleToggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Divider />
        <Box onClick={handleToggleDrawer(false)}>
          <MenuItemList />
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
