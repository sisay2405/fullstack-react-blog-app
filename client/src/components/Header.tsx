import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #333;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  & > a {
    color: #fefefe;
    text-decoration: none;
  }
  h2 {
    margin: 0.5rem 4rem;
  }
  span {
    padding: 0 1rem;
  }
`;

const NavWrapper = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-right: 4.5rem;
    margin: 0.1rem 2rem;
    &:first-child {
      padding-left: 0;
    }
  }
  a {
    color: #00e600;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: lightgrey;
    }
    &.active {
      color: #009900;
      font-style: italic;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h2>FULL-STACK REACT BLOG</h2>
      </Link>
      <NavWrapper>
        <ul>
          <li>
            <NavLink to="/">View Posts</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Post</NavLink>
          </li>
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
