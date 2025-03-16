import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/global.css";
import "./Styles/tailwind.css";
import "remixicon/fonts/remixicon.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./app/store.js";
import AppRoutes from "./routes/AppRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  </StrictMode>
);
