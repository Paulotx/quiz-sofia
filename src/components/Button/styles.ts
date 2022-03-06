import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;

  justify-content: center;

  padding: 8px 16px;
  min-width: 160px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};

  font-size: 16px;
`;
