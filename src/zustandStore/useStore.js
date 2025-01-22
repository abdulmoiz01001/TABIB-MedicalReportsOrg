// src/store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  // Function to store in Zustand
  customFunction: null,

  // Setter to set the function
  setCustomFunction: (fn) => set({ customFunction: fn }),
}));

export default useStore;
    