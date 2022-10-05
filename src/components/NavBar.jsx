import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const Nav = styled.nav`
  height: 100%;
  width: 100%;
`;
const NavList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 10px;
`;
const NavListItem = styled.li`
  color: black;
  font-size: 22px;
  margin-right: 10px;
  -webkit-text-stroke: 1.5px black;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  :hover {
    color: white;
    -webkit-text-stroke: 1.5px black;
    /* text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000; */
    cursor: pointer;
  }
`;
const NavBar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>Home</NavListItem>
          <NavListItem>About</NavListItem>
          <NavListItem>Portfolio</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem>Blog</NavListItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default NavBar;
