import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isProfileCardOpen: false,
  },
  reducers: {
    setIsProfileCardOpen: (state, action) => {
      state.isProfileCardOpen = action.payload;
    },
  },
});

export const { setIsProfileCardOpen } = navigationSlice.actions;
export default navigationSlice;
