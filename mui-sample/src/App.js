import { Box, CssBaseline, Divider, Drawer, Toolbar } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Todos from "./components/Todo";
import { MenuItemList } from "./components/global/MenuItemList";
import Notification from "./components/global/Notification";

const App = () => {
  const drawerWidth = 240;

  return (
    <>
      <CssBaseline />
      <Notification />
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: { sm: `${drawerWidth}px` },
          }}
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { width: `${drawerWidth}px` },
            }}
            open={true}
          >
            <Toolbar />
            <Divider />
            <MenuItemList />
          </Drawer>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            padding: "8px",
            height: "100%",
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Routes>
            <Route path="/" element={<Todos />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default App;
