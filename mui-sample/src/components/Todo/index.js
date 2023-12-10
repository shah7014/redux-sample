import React from "react";
import { useSelector } from "react-redux";
import { Add as AddIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { PageHeader } from "../global";
import { initWithRandomTodos } from "../../firebase/todos.collection";

const Todos = () => {
  const { todos } = useSelector((state) => state.todo);

  const initTodos = async () => {
    try {
      await initWithRandomTodos();
      console.log("INIT DONE");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="md">
      <PageHeader title={"Todos"} />

      {/* Todo Input */}
      <Stack
        flexDirection={"row"}
        gap={"8px"}
        alignItems={"stretch"}
        justifyContent={"space-between"}
      >
        <Paper sx={{ flex: 1 }} square>
          <InputBase
            placeholder="Add todos"
            sx={{ padding: "12px 8px", width: "100%" }}
          />
        </Paper>
        <Stack
          sx={{
            width: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.secondary.dark,
          }}
        >
          <AddIcon sx={{ width: "100%", color: "#fff", cursor: "pointer" }} />
        </Stack>
      </Stack>

      {/* Todos list */}
      {todos.length === 0 && (
        <Stack
          sx={{
            marginTop: "32px",
            width: "100%",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            backgroundColor: (theme) => theme.palette.grey[200],
          }}
        >
          <Typography variant="body1">
            Please add a todo to get started
          </Typography>
          <Button variant="contained" color="secondary" onClick={initTodos}>
            Randomize Init
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Todos;
