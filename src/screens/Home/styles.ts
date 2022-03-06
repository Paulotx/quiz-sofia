import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 96px 0;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const PhotoWrapper = styled.View`
  height: 250px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 125px;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  height: 220px;
  width: 220px;
  border-radius: 110px;
`;
