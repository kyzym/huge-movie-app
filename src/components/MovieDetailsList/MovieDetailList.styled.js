import styled from 'styled-components';

export const MovieDetailList = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  margin-bottom: 14px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const TextContent = styled.p`
  margin-bottom: 14px;
  font-size: 20px;
`;

export const Rating = styled.p`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;
  display: inline-block;

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
