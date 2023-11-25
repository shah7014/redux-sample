import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle, { Container } from "./globalStyles";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <NavBar />
      <Container>
        <ContentGrid>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <SideBar />
        </ContentGrid>
      </Container>
    </>
  );
};

const ContentGrid = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  display: grid;
  grid-template-columns: 7fr 3fr;
  column-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export default App;
