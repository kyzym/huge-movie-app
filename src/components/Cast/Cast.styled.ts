import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled.li`
  width: 200px;
  background-color: #e0e9e9;
  border-radius: 5px;
`;

export const Photo = styled.img`
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

export const NameRole = styled.div`
  padding: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CastWrapper = styled.div`
  padding: 20px;
`;
