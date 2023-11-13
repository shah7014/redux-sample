import React from "react";
import GlobalStyle from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import PostsPage from "./pages/PostsPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </>
  );
};

export default App;
