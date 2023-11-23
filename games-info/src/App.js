import React from "react";
import Home from "./pages/Home";
import { Container, GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;
