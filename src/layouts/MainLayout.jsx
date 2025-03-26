import { Navigate, useLocation, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import ProfileCard from "../components/profile/ProfileCard";
import Alert from "../components/common/Alert";
import LanguageAndTheme from "../components/settings/LanguageAndTheme";
import NavForSmallerDevices from "../components/common/NavForSmallerDevices";
import authService from "../services/authService";
import { signin, signout } from "../store/slices/authSlice";
import contentService from "../services/contentService";
import {
  addPosts,
  addArticles,
  setContentLoading,
} from "../store/slices/contentSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);
  const { isNewPostCardOpen, isPostDeleteModalOpen } = useSelector(
    (state) => state.content
  );
  const { alerts } = useSelector((state) => state.alert);
  const { status } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow =
      isThemeCardOpen || isNewPostCardOpen || isPostDeleteModalOpen.state
        ? "hidden"
        : "auto";
  }, [isThemeCardOpen, isNewPostCardOpen, isPostDeleteModalOpen.state]);

  //Checking Session for the user and setting it...
  useEffect(() => {
    const checkSession = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(signin({ ...user }));
      } else {
        dispatch(signout());
      }
    };

    checkSession();
  }, []);

  //to get posts and articles
  useEffect(() => {
    const getContent = async () => {
      setContentLoading(true);
      try {
        const contents = await contentService.getContents();
        if (contents) {
          const articles = contents.documents.filter(
            (content) => content.type === "article"
          );
          const posts = contents.documents.filter(
            (content) => content.type === "post"
          );
          dispatch(addPosts(posts));
          dispatch(addArticles(articles));
        }
      } catch (error) {
        throw new Error("Failed to load content");
      } finally {
        setContentLoading(false);
      }
    };
    getContent();
  }, []);

  if (!status && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="relative bg-primary-bg dark:bg-primary-bg-dark min-h-screen flex flex-col">
      <header className="flex items-center justify-between">
        {alerts?.length > 0 &&
          alerts.map((alert) => (
            <Alert key={alert.id} type={alert.type} variant={alert.variant}>
              {alert.message}
            </Alert>
          ))}
        <Navbar />
        <ProfileCard />
        <LanguageAndTheme />
      </header>
      <main className="container max-w-6xl mx-auto md:pt-5">
        <Outlet />
      </main>
      <NavForSmallerDevices />
    </div>
  );
};

export default MainLayout;
