import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation.tsx';
import store from './src/redux/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
export default App;
