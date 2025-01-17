// src/redux/slices/filtersUISlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCalendar: false,
  isTimePickerVisible: false,
  isDropdownOpen: false,
  isSortDropdownOpen: false,
};

const filtersUISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    offAll: (state) => {
      state.showCalendar = false;
      state.isTimePickerVisible = false;
      state.isSortDropdownOpen = false;
      state.isDropdownOpen = false;
    },
    setShowCalendar: (state, action) => {
      state.showCalendar = action.payload;
    },
    setTimePickerVisible: (state, action) => {
      state.isTimePickerVisible = action.payload;
    },
    setDropdownOpen: (state, action) => {
      state.isDropdownOpen = action.payload;
    },
    setSortDropdownOpen: (state, action) => {
      state.isSortDropdownOpen = action.payload;
    },
  },
});

export const {
  offAll,
  setShowCalendar,
  setTimePickerVisible,
  setDropdownOpen,
  setSortDropdownOpen,
} = filtersUISlice.actions;

export default filtersUISlice.reducer;
