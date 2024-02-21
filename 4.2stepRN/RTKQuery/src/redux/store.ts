import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {devicesApi} from '../sevices/devices.ts';

const store = configureStore({
  reducer: {
    [devicesApi.reducerPath]: devicesApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(devicesApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
