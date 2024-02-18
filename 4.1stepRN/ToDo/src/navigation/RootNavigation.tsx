import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from '../redux/store.ts';
import HomeScreen from '../screens/Home';
import {RootStackParamList} from '../types/routes.ts';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function RootNavigation(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={'Home'}>
          <RootStack.Screen
            name={'Home'}
            options={{title: 'ToDo'}}
            component={HomeScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
