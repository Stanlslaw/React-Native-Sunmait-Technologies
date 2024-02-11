import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUserAuthStatus: state => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeUserAuthStatus} = authSlice.actions;

export default authSlice.reducer;
