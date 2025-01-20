import { configureStore } from '@reduxjs/toolkit';
import patientsReportReducer from './features/patientsReportSlice'; // Import your slice reducer here
import dashboardPatientsDetailsReducers from './features/dashboardPatientsDetailsSlice'; // Import your slice reducer here
import PatientReportFiltersReducer from './features/FiltersSlice'; // Import your slice reducer here
// Configure the store
const store = configureStore({
  reducer: {
    patientsReports: patientsReportReducer, // You can add multiple reducers here for different slices
    dashboardPatientsAnalytics: dashboardPatientsDetailsReducers,
    PatientReportFilters: PatientReportFiltersReducer
 
  },
});

export default store;