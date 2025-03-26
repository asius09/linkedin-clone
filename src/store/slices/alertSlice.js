import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alerts: [], // Store multiple alerts
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlertMessage: (state, action) => {
      const newAlert = {
        id: Date.now(), // Unique ID to track alerts
        message: action.payload.message,
        type: action.payload.type || "info", // 'success', 'error', 'warning', 'info'
        variant: action.payload.variant || "toast", // 'toast', 'modal', 'banner'
        timeout: action.payload.timeout || 1500, // Fixed typo here
      };

      // Add new alert
      state.alerts.push(newAlert);

      // Automatically remove the alert after the specified timeout
      setTimeout(() => {
        state.alerts = state.alerts.filter((alert) => alert.id !== newAlert.id);
      }, newAlert.timeout); // Use the alert's timeout value
    },
  },
});

export const { setAlertMessage } = alertSlice.actions;
export default alertSlice;
