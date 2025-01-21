// src/redux/slices/filtersUISlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offAllFunction: null, // Placeholder for the function
};

const filtersUISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOffAllFunction: (state, action) => {
      state.offAllFunction = action.payload; // Save the function in state
    },
    executeOffAll: (state) => {
      // if (state.offAllFunction) {
        state.offAllFunction(); // Call the function if it exists
      // }
    },
  },
});

export const { setOffAllFunction, executeOffAll } = filtersUISlice.actions;

export default filtersUISlice.reducer;
