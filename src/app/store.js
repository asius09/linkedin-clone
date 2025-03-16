import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "../features/navigationSlice.js";
import postSlice from "../features/postSlice.js";
import themeSlice from "../features/themeSlice.js";
import authSlice from "../features/authSlice.js";

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    post: postSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
