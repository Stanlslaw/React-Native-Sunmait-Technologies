import auth from '@react-native-firebase/auth';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, useColorScheme, View} from 'react-native';

import LoaderScreen from '../screens/Loader';
import SignInScreen from '../screens/SignIn';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const scheme = useColorScheme();
  function onAuthStateChanged(userData) {
    setUser(userData);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {initializing ? (
          <Stack.Screen name={'loading'} component={LoaderScreen} />
        ) : user ? (
          <Stack.Screen name={'tab-stack'} component={TabNavigation} />
        ) : (
          <Stack.Screen name={'auth-stack'} component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
