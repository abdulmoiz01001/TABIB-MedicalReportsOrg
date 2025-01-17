// src/redux/slices/PatientReportByTimeRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredReportsByTime: [],
};

const PatientReportByTimeRangeSlice = createSlice({
  name: 'PatientReportByTimeRange',
  initialState,
  reducers: {
    setFilteredReports: (state, action) => {
       state.filteredReportsByTime = action.payload ;
      },
    
    clearFilteredReports: (state) => {
      state.filteredReportsByTime = [];
    },
  },
});

export const { setFilteredReports, clearFilteredReports } = PatientReportByTimeRangeSlice.actions;
export default PatientReportByTimeRangeSlice.reducer;
