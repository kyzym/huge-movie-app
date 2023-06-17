import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  border-radius: 5px;
  padding: 8px 14px;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: rgba(255, 69, 0, 1);
  cursor: pointer;
  margin-bottom: 20px;

  &:hover,
  :focus {
    background-color: rgba(255, 69, 0, 0.85);
  }
`;
