import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name={'tab-stack'} component={TabNavigation} />
        ) : (
          <Stack.Screen name={'auth-stack'} component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
