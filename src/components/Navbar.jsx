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
    { icon: "ri-group", text: "My Network", link: "/mynetwork" },
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
        `relative flex items-center gap-x-1 hover:text-primary transition-colors duration-200 py-3 ${
          isActive
            ? "text-primary border-primary border-b-2"
            : "text-primary-text dark:text-primary-text-dark"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <i
            className={`text-lg ${item.icon}-${isActive ? "fill" : "line"}`}
          ></i>
          <span className="text-md font-light">{item.text}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-secondary-bg dark:bg-secondary-bg-dark border-b border-border dark:border-border-dark">
      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center w-96">
          <Link to="/home" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
          </Link>
          <Search placeholder="Search" />
        </div>

        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <NavLinkItem key={index} item={item} />
          ))}

          <span className="w-px h-6 bg-border dark:bg-border-dark" />

          <div className="relative">
            <button
              onClick={handleProfileCardToggle}
              className="flex items-center space-x-2 text-primary-text dark:text-primary-text-dark hover:text-primary focus:outline-none cursor-pointer"
              aria-expanded={isProfileCardOpen}
              aria-haspopup="true"
            >
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex items-center">
                <span className="text-sm mr-2">{user.name}</span>
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
    </nav>
  );
};

export default Navbar;
