import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const DetailsLink = styled(NavLink)`
  padding: 2px 6px;
  width: 200px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;
  border: 1.5px solid orangered;

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
