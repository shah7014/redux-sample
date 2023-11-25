import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #16151d;
    font-size: 14px;
    line-height: 1.5;
    color: #b8b8b8;
  }

  h3 {
    font-size: 1.2rem;
    color: #fff;
    line-height: 20px;
    font-weight: 500;
    padding: 1rem;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    color: #fff
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin-inline: auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default GlobalStyle;
