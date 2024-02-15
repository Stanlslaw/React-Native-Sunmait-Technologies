import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import ButtonIcon from '../assets/images/button.svg';
import ListIcon from '../assets/images/list.svg';
//
import ButtonScreen from '../screens/Button';
import ListScreen from '../screens/List';

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
          name={'list'}
          options={{
            title: 'List',
            tabBarIcon: ({size}) => <ListIcon width={size} height={size} />,
          }}
          component={ListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
