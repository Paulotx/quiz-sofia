import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 56px 24px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ContentText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 16px;
  font-size: 18px;
`;
