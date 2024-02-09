import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={'sign-in'}>
      <Stack.Screen name={'sign-in'} component={SignInScreen} />
      <Stack.Screen name={'sign-up'} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
