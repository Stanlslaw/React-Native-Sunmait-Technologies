import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import GetScreen from '../screens/Get/index.tsx';
import PostScreen from '../screens/Post/index.tsx';
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Get'}>
        <Tab.Screen
          name={'Get'}
          options={{
            tabBarLabel: 'Get',
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name={'cloud-download-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          component={GetScreen}
        />
        <Tab.Screen
          name={'Post'}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name={'cloud-download-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          component={PostScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
