import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import {
  Home,
  Network,
  Jobs,
  Messages,
  Notifications,
  Profile,
  Login,
  SignUp,
  Landing,
  ArticleWriter,
} from "../pages";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/mynetwork" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article/new" element={<ArticleWriter />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
