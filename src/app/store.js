import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "../features/navigationSlice.js";
import postSlice from "../features/postSlice.js";
import themeSlice from "../features/themeSlice.js";

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    post: postSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
