import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LanguageAndTheme from "../components/LanguageAndTheme";

const MainLayout = () => {
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);
  const { isNewPostCardOpen } = useSelector((state) => state.post);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (isThemeCardOpen || isNewPostCardOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isThemeCardOpen, isNewPostCardOpen]);
  return (
    <div className="bg-primary-bg dark:bg-primary-bg-dark min-h-screen">
      <Navbar />
      <ProfileCard />
      <LanguageAndTheme />
      <div className="container max-w-7xl mx-auto pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
