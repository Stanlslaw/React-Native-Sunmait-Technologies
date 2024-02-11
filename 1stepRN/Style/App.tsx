import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation.jsx';
import {store} from './src/store/store.js';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
export default App;
