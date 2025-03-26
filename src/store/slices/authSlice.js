import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || null),
    status: localStorage.getItem("status") === "true",
  },
  reducers: {
    signin: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.status = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("status", true);
    },
    signout: (state) => {
      state.user = null;
      state.status = false;
      localStorage.removeItem("user");
      localStorage.removeItem("status");
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { signin, signout, updateProfile } = authSlice.actions;
export default authSlice;
