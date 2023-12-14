import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import NavBar from "./components/NavBar";
import SamplePaginatedTable from "./components/Sample/SamplePaginatedTable";
import Todo from "./components/Todo";
import { MenuItemList } from "./components/global/MenuItemList";
import Notification from "./components/global/Notification";

const App = () => {
  const drawerWidth = 240;

  const { theme: currentTheme } = useSelector((state) => state.app);

  const theme = createTheme({
    palette: {
      background: {
        default: currentTheme === "light" ? "#f5f5f5" : "#121212",
      },
      mode: currentTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
            // backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/todos" element={<Todo />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/sample" element={<SamplePaginatedTable />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
