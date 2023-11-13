import React from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavContainer>
        <Logo to="/">Testing</Logo>
        <NavLinks>
          <li>
            <NavLink to="/">Notes</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </NavLinks>
      </NavContainer>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  background: hotpink;
  height: 80px;
  position: sticky;
  top: 0;
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-size: 2rem;
  font-family: "Lobster", sans-serif;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  li > a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;

    &.active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default Navbar;
