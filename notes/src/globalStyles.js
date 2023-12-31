import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: #000;
    background: #e1e1e1;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
  border: none;
  background: transparent;
  border: 3px solid #23d997;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: #23d997;
    color: #fff;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: none;
  outline: none;
  border: 1px solid #000;
  color: #000;
  width: 100%;
  /* border-radius: 0.25rem; */

  &:focus {
    background: #d1d1d1;
  }
`;

export const InputError = styled.p`
  font-size: 0.75rem;
  color: red;
`;

export default GlobalStyle;
