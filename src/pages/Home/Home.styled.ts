import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

export const HomeWrapper = styled.div`
  padding: 20px;
`;
