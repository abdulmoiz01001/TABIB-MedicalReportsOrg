import { configureStore } from '@reduxjs/toolkit';
import patientsReportReducer from './features/patientsReportSlice'; // Import your slice reducer here

// Configure the store
const store = configureStore({
  reducer: {
    data: patientsReportReducer, // You can add multiple reducers here for different slices
  },
});

export default store;