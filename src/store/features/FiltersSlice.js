// src/redux/slices/PatientReportByDateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredReports: [],
  noReportsFound: false,
};

const FiltersSlice = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setFilteredReports: (state, action) => {
      state.filteredReports = action.payload;
      state.noReportsFound = false
    },
    clearFilteredReports: (state) => {
      state.filteredReports = [];
      state.noReportsFound = true;
    },
  },
});

export const { setFilteredReports, clearFilteredReports } = FiltersSlice.actions;
export default FiltersSlice.reducer;
