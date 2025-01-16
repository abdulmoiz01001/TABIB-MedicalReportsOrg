import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch dashboard patient analytics data
export const fetchDashboardAnalytics = createAsyncThunk('dashboardPatientsDetails/fetchDashboardAnalytics', async () => {
  const response = await fetch('https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports/analytics', {
    method: 'GET',
    headers: {
      'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard analytics data');
  }

  const data = await response.json();
  return data;
});

// Create the slice for dashboard analytics
const dashboardPatientsDetailsSlice = createSlice({
  name: 'dashboardPatientsDetails',
  initialState: {
    analyticsData: [],  // Holds the analytics data
    loading: false,     // Loading state
    error: null,        // Error state
  },
  reducers: {
    clearAnalyticsData: (state) => {
      state.analyticsData = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.analyticsData = action.payload;
      })
      .addCase(fetchDashboardAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { clearAnalyticsData } = dashboardPatientsDetailsSlice.actions;

// Export reducer
export default dashboardPatientsDetailsSlice.reducer;
