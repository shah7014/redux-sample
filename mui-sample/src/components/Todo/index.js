import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  Checkbox,
  Button,
  Container,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  initTodos,
  updateTodo,
} from "../../redux/todo/todoActions";
import { PageHeader } from "../global/common";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");

  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const initTodosHandler = () => {
    dispatch(initTodos());
  };

  const newTodoChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const createNewTodoHandler = () => {
    dispatch(createTodo({ title: newTodo, completed: false }));
    setNewTodo("");
  };

  const todoUpdateHandler = (todo) => (event) => {
    dispatch(updateTodo(todo.id, { completed: event.target.checked }));
  };

  const todoDeleteHandler = (todo) => () => {
    dispatch(deleteTodo(todo.id));
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
            value={newTodo}
            onChange={newTodoChangeHandler}
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
          <AddIcon
            sx={{ width: "100%", color: "#fff", cursor: "pointer" }}
            onClick={createNewTodoHandler}
          />
        </Stack>
      </Stack>

      {/* Todos List */}
      {todos.length !== 0 && (
        <>
          <Stack sx={{ margin: "16px 0", flexDirection: "column", gap: "4px" }}>
            {todos.map((todo) => (
              <Paper key={todo.id} sx={{ padding: "16px 8px" }}>
                <Stack
                  flexDirection="row"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack flexDirection={"row"} alignItems={"center"} gap="8px">
                    <Checkbox
                      checked={todo.completed}
                      onChange={todoUpdateHandler(todo)}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.title}
                    </Typography>
                  </Stack>
                  <DeleteIcon
                    fontSize="medium"
                    sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
                    onClick={todoDeleteHandler(todo)}
                  />
                </Stack>
              </Paper>
            ))}
          </Stack>
        </>
      )}

      {/* Todos list EMmpty */}
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
          <Button
            variant="contained"
            color="secondary"
            onClick={initTodosHandler}
          >
            Randomize Init
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Todo;
