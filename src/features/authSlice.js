import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    status: localStorage.getItem("status") === "true",
    isLogin: {
      state: localStorage.getItem("isLoginState") === "true",
      message: localStorage.getItem("isLoginMessage"),
    },
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
      state.status = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("status", true);
    },
    signout: (state) => {
      state.user = null;
      state.status = false;
      localStorage.removeItem("user");
      localStorage.removeItem("status");
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("isLoginState", action.payload.state);
      localStorage.setItem("isLoginMessage", action.payload.message);
    },
  },
});

export const { signin, signout, setIsLogin } = authSlice.actions;
export default authSlice;
