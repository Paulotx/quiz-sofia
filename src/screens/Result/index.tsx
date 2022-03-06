import { Button } from '@components/Button';
import { Title } from '@components/Title';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { ResultNavigationProps } from '../../@types/navigation';

import { Container, WrapperEndGame, EndGameText } from './styles';

export function Result() {
  const route = useRoute();
  const navigation = useNavigation();

  const { numberAnswersCorrect } = route.params as ResultNavigationProps;

  const handleNavigateToHome = useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);

  return (
    <Container>
      <Title>
        {numberAnswersCorrect === 10
          ? 'Parabéns'
          : numberAnswersCorrect > 6
          ? 'Muito Bom'
          : 'Nada Legal'}
      </Title>
      <WrapperEndGame>
        <EndGameText>
          {numberAnswersCorrect === 10
            ? 'Voce acertou todas as perguntas. Fico muito feliz, porque isso demonstra que me conhece muito bem!'
            : numberAnswersCorrect > 6
            ? `Você acertou ${numberAnswersCorrect} perguntas. Foi um bom resultado, porém ainda existe alguns segredos sobre mim que você não conhece!`
            : `Você acertou ${numberAnswersCorrect} perguntas. O resultado não foi bom. Porém isso pode ser bom, podemos melhorar nossa amizade e descobrir coisas novas um do outro.`}
        </EndGameText>
      </WrapperEndGame>

      <Button onPress={handleNavigateToHome}>Jogar novamente</Button>
    </Container>
  );
}
