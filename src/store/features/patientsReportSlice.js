import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('patientsReport/fetchData', async () => {
  const response = await fetch('https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports', {
    method: 'GET',
    headers: {
      'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
});


// Create the slice
const patientsReportSlice = createSlice({
  name: 'patientsReport',
  initialState: {
    items: [],       // The fetched data
    loading: false,  // Loading state while fetching data
    error: null,     // Any error that occurs during the fetch
  },
  reducers: {
    // Optional: you can add non-async reducers here to modify the state
    clearData: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // When fetchData is pending (start of async action)
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      // When fetchData is fulfilled (successful async action)
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Set fetched data
      })
      // When fetchData is rejected (error during async action)
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message
      });
  },
});

// Export actions (optional, if you want to use clearData or others)
export const { clearData } = patientsReportSlice.actions;

// Export the reducer to add it to the store
export default patientsReportSlice.reducer;
