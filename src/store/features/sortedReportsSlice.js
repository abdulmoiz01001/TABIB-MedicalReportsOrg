import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Your array of items
  sortBy: 'name',  // The default sorting criterion (you can change this)
  sortOrder: 'asc', // 'asc' for ascending, 'desc' for descending
};

const sortedReportsSlice = createSlice({
  name: 'sorted',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

  },
});

export const { setItems, setSortBy, setSortOrder, sortItems } = sortedReportsSlice.actions;

export default sortedReportsSlice.reducer;
