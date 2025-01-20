// src/redux/slices/PatientReportByDateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
};

const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLoginDone: (state) => {
      state.isAuthenticated = true;
    },
    clearLoginDone: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setLoginDone, clearLoginDone } = LoginSlice.actions;
export default LoginSlice.reducer;
