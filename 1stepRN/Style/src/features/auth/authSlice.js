import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeUserAuthStatus: state => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = authSlice.actions;

export default authSlice.reducer;
