/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation.tsx';

export default function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <RootNavigation />
    </View>
  );
}
