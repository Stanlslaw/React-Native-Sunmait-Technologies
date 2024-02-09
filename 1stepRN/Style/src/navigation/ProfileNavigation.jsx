import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AccountDetailsScreen from '../screens/AccountDetails';
import FavoritesScreen from '../screens/Favorites';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();
export default function ProfileNavigation() {
  return (
    <Stack.Navigator initialRouteName={'profile'}>
      <Stack.Screen name={'profile'} component={ProfileScreen} />
      <Stack.Screen name={'favorites'} component={FavoritesScreen} />
      <Stack.Screen name={'account-details'} component={AccountDetailsScreen} />
      <Stack.Screen name={'settings'} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
