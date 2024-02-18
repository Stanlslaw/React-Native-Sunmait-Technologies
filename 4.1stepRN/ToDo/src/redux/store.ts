import {configureStore} from '@reduxjs/toolkit';

import toDoSlice from '../screens/Home/slices/ToDoSlice.ts';

export const store = configureStore({reducer: {todos: toDoSlice}});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
