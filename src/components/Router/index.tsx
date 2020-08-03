import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RootNavigation';

import HomeScreen from '../../screens/HomeScreen';
import ContactListScreen from '../../screens/ContactListScreen';
import HistoryScreen from '../../screens/HistoryScreen';

import {colors} from '../../constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.white,
            headerTitle: 'ENVIAR DINHEIRO',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.white,
            headerTitle: 'HISTÓRICO DE ENVIOS',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
