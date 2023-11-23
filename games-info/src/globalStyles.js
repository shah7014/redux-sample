import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
  }
  h3 {
    font-size: 1rem;
    color: #333;
    padding: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 200%;
    color: #696969
  }
  a {
    text-decoration: none;
    color: #333
  };
`;

export const Container = styled.div`
  /* width: 100%; */
  /* max-width: 1500px; */
  /* margin-inline: auto; */
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
