import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageGalleryItem = styled.li`
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #e0e9e9;
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  border-radius: 15px;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h2`
  color: black;
  margin-bottom: 6px;
`;

export const TitleContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 110px;
`;
export const Rating = styled.p`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;

  background-color: ${({ rating }) => {
    if (rating > 7) {
      return '#6c3';
    }
    if (rating >= 4 && rating <= 7) {
      return '#fc0';
    }
    return '#f00';
  }};

  color: ${({ rating }) => (rating >= 4 && rating <= 7 ? 'black' : 'white')};
`;
