import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LoaderScreen from '../screens/Loader';
import SignInScreen from '../screens/SignIn';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const [navigateTo, setNavigateTo] = useState();
  const navigationRef = useRef();

  const scheme = useColorScheme();
  function onAuthStateChanged(userData) {
    setUser(userData);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    messaging().onNotificationOpenedApp(async message => {
      console.log('there' + message);
      navigationRef.current.navigate(message.data.screen, {isFocus: true});
    });

    async function getRoute() {
      const message = await messaging().getInitialNotification();
      if (message?.data.screen) {
        navigationRef.current.navigate(message?.data.screen, {isFocus: true});
      }
      return message;
    }
    const message = getRoute().catch(err => {
      console.log(err.message);
    });
  }, []);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
