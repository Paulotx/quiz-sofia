import { Button } from '@components/Button';
import { Title } from '@components/Title';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { Container, Content, ContentText } from './styles';

export function Rules() {
  const navigation = useNavigation();

  const handleNavigateToQuestions = useCallback(() => {
    navigation.navigate('questions');
  }, [navigation]);

  return (
    <Container>
      <Title>Regras do Jogos</Title>

      <Content>
        <ContentText>
          Este é um jogo de perguntas e respostas sobre a nossa querida Sofia.
        </ContentText>

        <ContentText>
          O jogo consiste em 10 questões de multipla escolha. Cada questão vale
          10 pontos. No final iremos descobrir o quanto você conhece a Sofia.
        </ContentText>

        <ContentText>Você esta pronto? Então vamos começar!</ContentText>
      </Content>

      <Button onPress={handleNavigateToQuestions}>Jogar</Button>
    </Container>
  );
}
