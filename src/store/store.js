import { configureStore } from '@reduxjs/toolkit';
import patientsReportReducer from './features/patientsReportSlice'; // Import your slice reducer here
import sortedReportsReducer from './features/sortedReportsSlice'; // Import your slice reducer here
import bloodPressureReducer from "./features/bloodPressureSlice";
import searchFilterReducer from "./features/searchFilter";
import dashboardPatientsDetailsReducers from './features/dashboardPatientsDetailsSlice'; // Import your slice reducer here
// Configure the store
const store = configureStore({
  reducer: {
    patientsReports: patientsReportReducer, // You can add multiple reducers here for different slices
    sortedReports: sortedReportsReducer, 
    sortedReportsBP: bloodPressureReducer, // Updated slice name
    sortedSearchReports: searchFilterReducer, // Updated slice name
    dashboardPatientsAnalytics: dashboardPatientsDetailsReducers
  },
});

export default store;