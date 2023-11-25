import React from "react";
import Home from "./pages/Home";
import { Container, GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
