import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import alertSlice from "./slices/alertSlice";
import contentSlice from "./slices/contentSlice";
import themeSlice from "./slices/themeSlice";
import featureFlagSlice from "./slices/featureFlagsSlice";

const store = configureStore({
  reducer: {
    content: contentSlice.reducer,
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    featureFlags: featureFlagSlice.reducer,
  },
});

export default store;
