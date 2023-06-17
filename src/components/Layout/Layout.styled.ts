import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: orangered;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid black;
`;
