import { Navigate, useLocation, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";
import Navbar from "../components/common/Navbar";
import { ProfileCard } from "../components/profile";
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
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);
  const { isPostDeleteModalOpen } = useSelector((state) => state.content);
  const { featureFlags } = useSelector((state) => state.featureFlags);
  const { alerts } = useSelector((state) => state.alert);
  const { status } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Handle feature flags and modals
  useEffect(() => {
    const activeFeatureFlags = Object.values(featureFlags).some((flag) => flag);
    const isAnyModalOpen =
      isThemeCardOpen || isPostDeleteModalOpen || activeFeatureFlags;
    document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";
  }, [isThemeCardOpen, isPostDeleteModalOpen, featureFlags]);

  // Checking Session for the user and setting it
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
  }, [dispatch]);

  // Get posts and articles
  useEffect(() => {
    const getContent = async () => {
      dispatch(setContentLoading(true));
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
        console.error("Failed to load content:", error);
      } finally {
        dispatch(setContentLoading(false));
      }
    };
    getContent();
  }, [dispatch]);

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
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <NavForSmallerDevices />
    </div>
  );
};

export default MainLayout;
