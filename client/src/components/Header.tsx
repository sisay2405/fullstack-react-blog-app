import userEvent from '@testing-library/user-event';
import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState
} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../types/hooks';
import { setLogOut } from '../store/userSlice';

const HeaderWrapper = styled.header`
position: fixed;
top: 0;
width:100%;
  align-items: center;
  background-color: #2dbeeb;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
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
  .userName {
    color: black;
    font-size: 1.25rem;
    font-weight: 700;
    &:hover {
      color: lightgrey;
    }
    &.active {
      color: white;
      font-style: italic;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  button:onhover {
    cursor: pointer;
    background-color: white;
  }
  li {
    padding-right: 4.5rem;
    margin: 0.1rem 2rem;
    &:first-child {
      padding-left: 0;
    }
  a {
    color: black;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: lightgrey;
    }
    &.active {
      color: white;
      font-style: italic;
    }
  }
`;

const Header = () => {
  const [loggedIn, setLoggedin] = useState(false);
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      setLoggedin(false);
    } else {
      setLoggedin(true);
    }
  }, [user]);

  const LogOut = () => {
    // call reducer function in slice to logout
    console.log('CLICKED LOGOUT');
    dispatch(setLogOut());
  };

  return (
    <HeaderWrapper>
      <Link className="userName" to="/">
        <h2>BLOG APP</h2>
      </Link>
      <NavWrapper>
        <ul>
          <li>
            <NavLink to="/">View Posts</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Post</NavLink>
          </li>

          {loggedIn === false ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="userName">{user.username}</li>
              <li>
                {' '}
                <div className="userName"  onClick={LogOut}>
                  Log Out
                </div>
              </li>
            </>
          )}
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
