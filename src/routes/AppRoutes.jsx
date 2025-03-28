import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ROUTES from "./routes";
import { Home, Network, Jobs, Login, SignUp, Landing } from "../pages";
//lazy loadings
const Messages = lazy(() => import("../pages/Messages"));
const Notifications = lazy(() => import("../pages/Notifications"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const PostComposer = lazy(() => import("../components/post/PostComposer"));
const ArticleFeed = lazy(() => import("../components/articles/ArticleFeed"));
const ArticleReader = lazy(() => import("../components/articles/ArticleReader"));
const ArticleWriter = lazy(() => import("../components/articles/ArticleWriter"));

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<Landing />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />}>
          <Route path={ROUTES.NEWPOST} element={<PostComposer />} />
        </Route>
        <Route path={ROUTES.MYNETWORK} element={<Network />} />
        <Route path={ROUTES.JOBS} element={<Jobs />} />
        <Route path={ROUTES.MESSAGES} element={<Messages />} />
        <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.ARTICLE} element={<ArticleWriter />} />
        <Route path={ROUTES.ARTICLEREADER} element={<ArticleReader />} />
        <Route path={ROUTES.ARTICLEFEED} element={<ArticleFeed />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
