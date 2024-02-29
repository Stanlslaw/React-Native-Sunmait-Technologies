import messaging from '@react-native-firebase/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName={'home'}>
      <Tab.Screen
        name={'home'}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'search'}
        options={{
          title: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={'profile-stack'}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
}
