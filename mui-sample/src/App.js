import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, Divider, Drawer, Toolbar } from "@mui/material";
import { MenuItemList } from "./components/global";
import Todos from "./components/Todo";

const App = () => {
  const drawerWidth = 240;

  return (
    <>
      <CssBaseline />
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
            height: "100vh",
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
