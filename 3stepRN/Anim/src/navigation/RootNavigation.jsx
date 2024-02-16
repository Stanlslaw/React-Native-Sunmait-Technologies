import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import ButtonIcon from '../assets/images/button.svg';
import ListIcon from '../assets/images/list.svg';
//
import ButtonScreen from '../screens/Button';
import ItemNavigation from './ItemNavigation';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'button'}>
        <Tab.Screen
          name={'button'}
          options={{
            title: 'Button',
            tabBarIcon: ({size, color}) => (
              <ButtonIcon width={size} height={size} />
            ),
          }}
          component={ButtonScreen}
        />
        <Tab.Screen
          name={'list-stack'}
          options={{
            headerShown: 'false',
            headerTitle: null,
            title: 'List',
            tabBarIcon: ({size}) => <ListIcon width={size} height={size} />,
          }}
          component={ItemNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
