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
