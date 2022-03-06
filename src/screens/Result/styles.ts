import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 56px 24px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperEndGame = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const EndGameText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;
