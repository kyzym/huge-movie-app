import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MovieListItem = styled.li`
  width: 200px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e0e9e9;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 200px;
  height: 300px;
`;

export const TitleRating = styled.div`
  padding: 8px;
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const Rating = styled.p`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;
  display: inline-block;
  text-align: center;

  background-color: ${({ rating }) => {
    if (rating > 7) {
      return '#6c3';
    }
    if (rating >= 4 && rating <= 7) {
      return '#fc0';
    }
    if (rating > 0 && rating < 4) return '#f00';

    return '#00f';
  }};

  color: ${({ rating }) => (rating >= 4 && rating <= 7 ? 'black' : 'white')};
`;
