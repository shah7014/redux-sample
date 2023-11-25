import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <StyledSideBar>
      <SideBarTitle>
        <h3>Popular</h3>
      </SideBarTitle>
      <SideBarContent>
        <ButtonGroup>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
          <Button>All</Button>
        </ButtonGroup>
      </SideBarContent>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  background: #222;
  padding-bottom: 0.5rem;
`;

const SideBarTitle = styled.div`
  border-bottom: 1px solid #312f40;
`;

const SideBarContent = styled.div`
  padding: 0.8rem;
`;

const ButtonGroup = styled.div`
  background: #333;
  border-radius: 3px;
  padding: 6px;

  display: flex;
`;

const Button = styled.button`
  width: 33%;
  background: #333;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #913fe2;
  }
`;

export default SideBar;
