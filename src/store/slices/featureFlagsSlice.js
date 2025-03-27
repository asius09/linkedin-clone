import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //featureFlags to manage the states of UI's
  featureFlags: {
    postComposer: false, //done
    isLanguageAndThemeSettingsOpen: false,
    isPostDeleteModelOpen: false, //done
    isProfileCardOpen: false,
  },
};

const featureFlagSlice = createSlice({
  name: "featureFlags",
  initialState: initialState,
  reducers: {
    toggleFeatureFlags: (state, action) => {
      const { flag } = action.payload;

      //closing all the feature flags
      for (let key in state.featureFlags) {
        state.featureFlags[key] = false;
      }
      // then setting desire feature flag to open
      state.featureFlags[flag] = true;
    },
    // for closing desire flag
    closeFeatureFlags: (state, action) => {
      const { flag } = action.payload;

      state.featureFlags[flag] = false;
    },
    closeAllFeatureFlags: (state) => {
      for (let key in state.featureFlags) {
        state.featureFlags[key] = false;
      }
    },
  },
});

export const { toggleFeatureFlags, closeFeatureFlags, closeAllFeatureFlags } =
  featureFlagSlice.actions;
export default featureFlagSlice;
