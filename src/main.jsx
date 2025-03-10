import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { Landing } from "./components/Landing";
import { Login, SignUp } from "./components/Auth";
import HomeLayout from "./HomeLayout";
import Home from "./components/Home";
import Network from "./components/MyNetwork";
import Jobs from "./components/Jobs/Jobs.jsx";
import Messages from "./components/Messages/Messages.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import Profile from "./components/Home/Profile/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route element={<HomeLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="my-network" element={<Network />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
