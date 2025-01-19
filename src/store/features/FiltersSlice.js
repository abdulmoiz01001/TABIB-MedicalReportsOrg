// src/redux/slices/PatientReportByDateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredReports: [],
};

const FiltersSlice = createSlice({
  name: 'Filters',
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

export const { setFilteredReports, clearFilteredReports } = FiltersSlice.actions;
export default FiltersSlice.reducer;
