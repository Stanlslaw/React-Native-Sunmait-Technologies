import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AccountDetailsScreen from '../screens/AccountDetails';
import FavoritesScreen from '../screens/Favorites';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();
export default function ProficleNavigation({navigation, route}) {
  useLayoutEffect(() => {
    const tabHiddenRoutes = ['account-details', 'settings'];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName={'profile'}>
      <Stack.Screen
        name={'profile'}
        options={{title: 'Profile'}}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={'favorites'}
        options={{
          headerTitleAlign: 'center',
          title: 'Favorites',
        }}
        component={FavoritesScreen}
      />
      <Stack.Screen
        name={'account-details'}
        options={{
          headerTitleAlign: 'center',
          title: 'Edit profile',
          headerRight: () => (
            <TouchableOpacity>
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        }}
        component={AccountDetailsScreen}
      />
      <Stack.Screen
        name={'settings'}
        options={{
          headerTitleAlign: 'center',
        }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
