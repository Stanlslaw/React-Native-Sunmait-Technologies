import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ItemScreen from '../screens/Item';
import ListScreen from '../screens/List';

const Stack = createStackNavigator();
export default function ItemNavigation() {
  return (
    <Stack.Navigator initialRouteName={'list'}>
      <Stack.Screen
        name={'list'}
        options={{title: 'List', headerShown: false}}
        component={ListScreen}
      />
      <Stack.Screen
        name={'item'}
        options={{headerShown: false}}
        component={ItemScreen}
      />
    </Stack.Navigator>
  );
}
