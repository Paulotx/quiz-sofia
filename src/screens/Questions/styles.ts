import styled, { css } from 'styled-components/native';

interface WrapperAnswerProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 56px 24px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const WrapperAnswers = styled.View`
  padding: 24px;
  width: 100%;
  background-color: #ededed;
  border-radius: 8px;
  align-items: center;
`;

export const QuestionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  text-align: center;
`;

export const WrapperAnswer = styled.TouchableOpacity<WrapperAnswerProps>`
  width: 100%;
  padding: 8px 16px;
  background-color: #dedede;
  margin-top: 16px;
  border-radius: 4px;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #fbd457;
    `}
`;

export const Answer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
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
  text-align: center;
`;
