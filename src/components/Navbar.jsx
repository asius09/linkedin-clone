import React from "react";
import { Link, NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setIsProfileCardOpen } from "../features/navigationSlice";
import Search from "./Search";

const Navbar = () => {
  const { isProfileCardOpen } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const navItems = [
    { icon: "ri-home", text: "Home", link: "/home" },
    { icon: "ri-group", text: "Network", link: "/mynetwork" },
    { icon: "ri-briefcase", text: "Jobs", link: "/jobs" },
    { icon: "ri-message-2", text: "Messages", link: "/messages" },
    {
      icon: "ri-notification-3",
      text: "Notifications",
      link: "/notifications",
    },
  ];

  const user = {
    name: "Amilly Johnson",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const handleProfileCardToggle = () => {
    dispatch(setIsProfileCardOpen(!isProfileCardOpen));
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
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="w-12 h-12 md:w-8 md:h-8 rounded-full object-cover"
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
