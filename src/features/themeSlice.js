import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme") || "dark",
    isThemeCardOpen: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    toggleThemeCard: (state) => {
      state.isThemeCardOpen = !state.isThemeCardOpen;
    },
  },
});

export const { toggleTheme, toggleThemeCard } = themeSlice.actions;
export default themeSlice;
