import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName={'home'}>
      <Tab.Screen name={'home'} component={HomeScreen} />
      <Tab.Screen name={'search'} component={SearchScreen} />
      <Tab.Screen name={'profile-stack'} component={ProfileNavigation} />
    </Tab.Navigator>
  );
}
