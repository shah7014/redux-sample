import React from "react";
import logo from "../img/logo.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeFilteredGames } from "../redux/actions/gameActions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <NavbarStyled>
      <Logo onClick={() => dispatch(removeFilteredGames())}>
        <img src={logo} alt="logo" />
        <p>GameDay</p>
      </Logo>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  p {
    color: black;
    font-weight: bold;
  }
`;

export default Navbar;
