import React from "react";
import { Container } from "../globalStyles";
import NewNoteForm from "../components/NewNoteForm";
import NotestList from "../components/NotestList";

const NotesPage = () => {
  return (
    <Container>
      <NewNoteForm />
      <NotestList />
    </Container>
  );
};

export default NotesPage;
