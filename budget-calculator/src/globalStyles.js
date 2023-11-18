import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 2rem;
    font-family: 'Lobster Two', sans-serif;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 968px;
  margin-inline: auto;
  padding: 1rem 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #4a4ad3;
  border-radius: 0.5rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0.75rem;
  border-radius: 0.5rem;
  background: ${({ $bg }) => $bg};
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  border: 1px solid #a1a1a1;
  border-radius: 0.5rem;
`;

export const InputError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export default GlobalStyle;
