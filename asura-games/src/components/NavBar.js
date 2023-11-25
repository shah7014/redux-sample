import React from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavContainer>
        <MenuItems>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Games</NavLink>
          </li>
        </MenuItems>
        <Button>Surprise Me!</Button>
      </NavContainer>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.nav`
  background: #913fe2;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li {
    & > a {
      padding: 0 0.5rem;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      display: flex;
      height: 100%;
      align-items: center;

      &:hover {
        background: rgba(0, 0, 0, 0.32);
      }
    }
  }
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.32);
  padding: 5px 10px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0.6rem 0;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.5s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export default NavBar;
