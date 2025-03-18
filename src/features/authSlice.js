import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: false,
    isLogin: {
      state: false,
      message: null,
    },
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
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { signin, signout, setIsLogin } = authSlice.actions;
export default authSlice;
