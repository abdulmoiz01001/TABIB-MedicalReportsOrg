// src/redux/slices/PatientReportByDateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredReports: [],
};

const PatientReportByDateRangeSlice = createSlice({
  name: 'PatientReportByDateRange',
  initialState,
  reducers: {
    setFilteredReports: (state, action) => {
      state.filteredReports = action.payload;
    },
    clearFilteredReports: (state) => {
      state.filteredReports = [];
    },
  },
});

export const { setFilteredReports, clearFilteredReports } = PatientReportByDateRangeSlice.actions;
export default PatientReportByDateRangeSlice.reducer;
