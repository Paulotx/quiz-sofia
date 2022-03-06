import photo from '@assets/sofia.jpeg';
import { Button } from '@components/Button';
import { Title } from '@components/Title';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { Container, Content, PhotoWrapper, Photo } from './styles';

export function Home() {
  const navigation = useNavigation();

  const handleNavigateToRules = useCallback(() => {
    navigation.navigate('rules');
  }, [navigation]);

  return (
    <Container>
      <Content>
        <PhotoWrapper>
          <Photo source={photo} resizeMode="cover" />
        </PhotoWrapper>
        <Title>Quiz da Sofia</Title>
      </Content>
      <Button onPress={handleNavigateToRules}>Começar</Button>
    </Container>
  );
}
