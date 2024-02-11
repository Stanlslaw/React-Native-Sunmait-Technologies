import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={'sign-in'}>
      <Stack.Screen
        name={'sign-in'}
        options={{title: 'Sign In', headerTitleAlign: 'center'}}
        component={SignInScreen}
      />
      <Stack.Screen
        name={'sign-up'}
        options={{title: 'Sign Up', headerTitleAlign: 'center'}}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}
