import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {useSelector} from 'react-redux';

import SignInScreen from '../screens/SignIn';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const {isLoggedIn} = useSelector(state => state.auth);
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name={'tab-stack'} component={TabNavigation} />
        ) : (
          <Stack.Screen name={'auth-stack'} component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
