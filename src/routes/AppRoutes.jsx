import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ROUTES from "./routes";
import {
  Home,
  Network,
  Jobs,
  Messages,
  Notifications,
  ProfilePage,
  Login,
  SignUp,
  Landing,
} from "../pages";
import { NewPostCard } from "../components/post";
import {
  ArticleReader,
  ArticleFeed,
  ArticleWriter,
} from "../components/articles";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<Landing />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />}>
          <Route path={ROUTES.NEWPOST} element={<NewPostCard />} />
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
