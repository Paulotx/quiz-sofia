import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Rules } from '@screens/Rules';
import { Questions } from '@screens/Questions';
import { Result } from '@screens/Result';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="rules" component={Rules} />
      <Screen name="questions" component={Questions} />
      <Screen name="result" component={Result} />
    </Navigator>
  );
}
