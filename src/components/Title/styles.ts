import styled from 'styled-components/native';

export const Container = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};

  font-size: 36px;
  margin-top: 16px;
`;
