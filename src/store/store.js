import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";
import contentSlice from "./slices/contentSlice";
import themeSlice from "./slices/themeSlice";
import navigationSlice from "./slices/navigationSlice";

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    content: contentSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
