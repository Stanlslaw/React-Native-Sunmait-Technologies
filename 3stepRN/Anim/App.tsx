/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import RootNavigation from './src/navigation/RootNavigation.jsx';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <RootNavigation />
    </View>
  );
}

export default App;
