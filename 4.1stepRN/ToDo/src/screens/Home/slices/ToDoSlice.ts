import {getActionFromState} from '@react-navigation/native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../../../redux/store.ts';
import type {ToDo} from '../../../types';

export interface ToDoState {
  todo: ToDo[];
}

const initialState: ToDoState = {
  todo: [
    {
      id: '1',
      text: 'Do Home Work',
      state: false,
    },
  ],
};

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ToDo>) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<ToDo>) => {
      state.todo = state.todo.filter(item => item.id !== action.payload.id);
    },
    changeToDoStatus: (state, action: PayloadAction<ToDo>) => {
      const item = state.todo.find(item => item.id === action.payload.id);
      if (item) {
        item.state = !item.state;
      }
    },
  },
});

export const {addTodo, changeToDoStatus, deleteTodo} = toDoSlice.actions;

export const selectToDo = (state: RootState) => state.todos.todo;

export default toDoSlice.reducer;
