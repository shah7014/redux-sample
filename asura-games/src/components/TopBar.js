import React, { useEffect } from "react";
import { Container } from "../globalStyles";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "../img/logo.png";
import { setMobileMenuOpen } from "../redux/actions/appActions";
import useWindowSize from "../hooks/useWindowSize";

const TopBar = () => {
  const { isMobileMenuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const { width } = useWindowSize();

  // Need to close mobile menu when user switched to window screen size
  useEffect(() => {
    if (width >= 768 && isMobileMenuOpen) {
      dispatch(setMobileMenuOpen(false));
    }
  }, [width, dispatch, isMobileMenuOpen]);

  const toggleMenuHandler = () => {
    dispatch(setMobileMenuOpen(!isMobileMenuOpen));
  };

  return (
    <>
      <StyledTopBar>
        <NavContainer>
          <LeftContainer>
            <FaBars onClick={toggleMenuHandler} />
            <StyledLink to="/">
              <img src={logo} alt="logo" />
            </StyledLink>
          </LeftContainer>
          {/* Need to add a toggle switch for dark and light theme mode */}
          <RightContainer>
            <Input placeholder="Search" />
          </RightContainer>
        </NavContainer>
      </StyledTopBar>
      {isMobileMenuOpen && (
        <MobileMenu>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Games</NavLink>
            </li>
          </ul>
          <button>Surprise Me!</button>
        </MobileMenu>
      )}
    </>
  );
};

const StyledTopBar = styled.div`
  background: #0b0a0d;
  height: 60px;

  @media screen and (max-width: 768px) {
    background: #913fe2;
  }
`;

const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: auto;
    max-height: 50px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    svg {
      display: block;
      font-size: 28px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      align-self: center;
    }
  }
`;

const RightContainer = styled.div`
  width: 40%;
`;

const Input = styled.input`
  width: 100%;

  padding: 6px 12px;
  font-weight: 300;
  font-size: 14px;
  color: #fff;
  background: #17151b;
  border: 1px solid #23202a;
  border-radius: 3px;
  outline: none;

  &::placeholder {
    font-weight: bold;
  }
`;

// MobileMenu
const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background: rgba(28, 28, 28, 0.95);
  color: #fff;
  padding: 0 1rem;
  z-index: 2;

  display: none;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      & > a {
        padding: 0.5rem;
        display: flex;
        width: 100%;

        &:hover {
          background: #000;
        }
      }
    }
  }

  button {
    margin-top: 0.5rem;
    background: #913fe2;
    color: #fff;
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;

    display: flex;
    justify-content: center;

    &:hover {
      background: #fff;
      color: #000;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default TopBar;
