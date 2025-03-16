import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    status: false,
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    signout: (state) => {
      state.user = null;
      state.status = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signin, signout, setLoading, setError } = authSlice.actions;
export default authSlice;
