import { createSlice } from '@reduxjs/toolkit';

// Initial state structure with unique 'useBP' names
const initialState = {
  bpData: [], // To hold the original BP data
  bpFilteredData: [], // To hold filtered BP data
};

// Create slice
const bloodPressureSlice = createSlice({
  name: 'useBP',
  initialState,
  reducers: {
    setBpData: (state, action) => {
      state.bpData = action.payload; // Set the BP data from an API or other source
    },
    setBpFilteredData: (state, action) => {
      state.bpFilteredData = action.payload; // Set the filtered BP data
    },
  },
});

// Export actions
export const { setBpData, setBpFilteredData } = bloodPressureSlice.actions;

// Export reducer to be used in the store
export default bloodPressureSlice.reducer;
