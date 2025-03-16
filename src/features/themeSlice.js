import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
    isThemeCardOpen: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleThemeCard: (state) => {
      state.isThemeCardOpen = !state.isThemeCardOpen;
    },
  },
});

export const { toggleTheme, toggleThemeCard } = themeSlice.actions;
export default themeSlice;
