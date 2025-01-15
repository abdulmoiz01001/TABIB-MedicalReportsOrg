import { createSlice } from '@reduxjs/toolkit';

// Initial state structure for search filter
const initialState = {
  searchTerm: '', // To hold the search term input
  filteredData: [], // To hold the filtered data based on the search term
};

// Create slice
const searchFilterSlice = createSlice({
  name: 'useSearchFilter',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Set the search term
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload; // Set the filtered data based on the search term
    },
  },
});

// Export actions
export const { setSearchTerm, setFilteredData } = searchFilterSlice.actions;

// Export reducer to be used in the store
export default searchFilterSlice.reducer;
