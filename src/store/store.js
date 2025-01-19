import { configureStore } from '@reduxjs/toolkit';
import patientsReportReducer from './features/patientsReportSlice'; // Import your slice reducer here
// import sortedReportsReducer from './features/sortedReportsSlice'; // Import your slice reducer here
// import bloodPressureReducer from "./features/bloodPressureSlice";
// import searchFilterReducer from "./features/searchFilter";
import dashboardPatientsDetailsReducers from './features/dashboardPatientsDetailsSlice'; // Import your slice reducer here
// import filtersUIReducer from './features/filtersUISlice'; // Import your slice reducer here
// import PatientReportByDateRangeReducer from './features/PatientReportByDateRangeSlice'; // Import your slice reducer here
// import PatientReportByTimeRangeReducer from './features/PatientReportByTimeRange'; // Import your slice reducer here
import PatientReportFiltersReducer from './features/FiltersSlice'; // Import your slice reducer here
// Configure the store
const store = configureStore({
  reducer: {
    patientsReports: patientsReportReducer, // You can add multiple reducers here for different slices
    // sortedReports: sortedReportsReducer, 
    // sortedReportsBP: bloodPressureReducer, // Updated slice name
    // searchReports: searchFilterReducer, // Updated slice name
    dashboardPatientsAnalytics: dashboardPatientsDetailsReducers,
    // filtersUI: filtersUIReducer, // Add the slice reducer here
    // PatientReportByDateRange: PatientReportByDateRangeReducer,
    // PatientReportByTimeRange: PatientReportByTimeRangeReducer,
    PatientReportFilters: PatientReportFiltersReducer
    // PatientReportByTimeRange: PatientReportByTimeRangeReducer,
 
  },
});

export default store;