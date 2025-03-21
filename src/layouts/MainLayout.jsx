import { Navigate, useLocation, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LanguageAndTheme from "../components/LanguageAndTheme";
import Alert from "../components/Alerts";
import authService from "../services/authService";
import { signin, signout } from "../features/authSlice";
import NavForSmallerDevices from "../components/NavForSmallerDevices";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);
  const { isNewPostCardOpen, alertMessage, isPostDeleteModalOpen } =
    useSelector((state) => state.post);
  const { status, isLogin } = useSelector((state) => state.auth);
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

  if (!status && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="relative bg-primary-bg dark:bg-primary-bg-dark min-h-screen flex flex-col">
      <header className="flex items-center justify-between">
        {alertMessage.state && (
          <Alert key={alertMessage.id} type={alertMessage.type}>
            {alertMessage.message}
          </Alert>
        )}
        {isLogin.state && <Alert type="success">{isLogin.message}</Alert>}
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
