import React from "react";
import { Link, NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleFeatureFlags,
  closeFeatureFlags,
} from "../../store/slices/featureFlagsSlice";
import { Search } from "../ui/";
import { UserAvatar } from "../common";
import ROUTES from "../../routes/routes";

const Navbar = () => {
  const { isProfileCardOpen } = useSelector(
    (state) => state.featureFlags.featureFlags
  );
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navItems = [
    { icon: "ri-home", text: "Home", link: ROUTES.HOME },
    { icon: "ri-group", text: "Network", link: ROUTES.MYNETWORK },
    { icon: "ri-briefcase", text: "Jobs", link: ROUTES.JOBS },
    { icon: "ri-message-2", text: "Messages", link: ROUTES.MESSAGES },
    {
      icon: "ri-notification-3",
      text: "Notifications",
      link: ROUTES.NOTIFICATIONS,
    },
  ];

  const handleProfileCardToggle = () => {
    isProfileCardOpen
      ? dispatch(closeFeatureFlags({ flag: "isProfileCardOpen" }))
      : dispatch(toggleFeatureFlags({ flag: "isProfileCardOpen" }));
  };

  const NavLinkItem = ({ item }) => (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        `relative flex flex-col items-center gap-x-1 hover:text-primary transition-colors duration-200 py-3 md:w-16 ${
          isActive
            ? "text-primary border-primary border-b-2"
            : "text-primary-text dark:text-primary-text-dark"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <i
            className={`text-2xl ${item.icon}-${isActive ? "fill" : "line"}`}
          ></i>
          <span className="text-xs font-light">{item.text}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-secondary-bg dark:bg-secondary-bg-dark border-b border-border dark:border-border-dark">
      <div className="container px-4 md:px-0 mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center w-full pr-2 md:w-96 md:pr-0">
          <Link to="/home" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
          </Link>
          <Search placeholder="Search" />
        </div>

        <div className="flex items-center space-x-4 lg:space-x-8">
          <div className="hidden md:flex items-center md:space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <NavLinkItem key={index} item={item} />
            ))}
          </div>
          <span className="w-px h-6 bg-border dark:bg-border-dark hidden md:block" />
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <button
                onClick={handleProfileCardToggle}
                className="flex flex-col justify-center items-center text-primary-text dark:text-primary-text-dark hover:text-primary focus:outline-none cursor-pointer"
                aria-expanded={isProfileCardOpen}
                aria-haspopup="true"
              >
                <UserAvatar
                  size={24}
                  iconSize={1}
                  imgURL={currentUser?.avatar || ""}
                />
                <div className="hidden md:flex items-center space-x-1 ">
                  <span className="text-xs">Me</span>
                  <i
                    className={`ri-arrow-down-s-line transition-transform duration-200 ${
                      isProfileCardOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
