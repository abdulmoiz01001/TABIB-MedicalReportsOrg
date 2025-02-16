// src/redux/slices/PatientReportByDateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredReports: [],
  noReportsFound: false,
  reportShow: true,
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
    setOffReports: (state) => {
      state.reportShow = !state.reportShow;
    }
  },
});

export const { setFilteredReports, clearFilteredReports , setOffReports } = FiltersSlice.actions;
export default FiltersSlice.reducer;
