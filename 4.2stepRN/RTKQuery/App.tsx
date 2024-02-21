import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import RootNavigation from './src/Navigation/RootNavigation.tsx';
import store from './src/redux/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
export default App;
