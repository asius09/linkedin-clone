import { Outlet, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LanguageAndTheme from "../components/LanguageAndTheme";
// import authService from "../services/authService";
// import { signin, signout, setLoading, setError } from "../features/authSlice";
import Alert from "../components/Alerts";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);
  const { isNewPostCardOpen } = useSelector((state) => state.post);
  const { status, isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow =
      isThemeCardOpen || isNewPostCardOpen ? "hidden" : "auto";
  }, [isThemeCardOpen, isNewPostCardOpen]);

  if (!status) return <Navigate to="/login" />;

  return (
    <div className="bg-primary-bg dark:bg-primary-bg-dark min-h-screen">
      <header>
        {isLogin.state && <Alert type="success">{isLogin.message}</Alert>}
        <Navbar />
        <ProfileCard />
        <LanguageAndTheme />
      </header>
      <main className="container max-w-7xl mx-auto pt-5">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
