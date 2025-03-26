import React from "react";
import { NavLink } from "react-router";

const NavForSmallerDevices = () => {
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

  const NavLinkItem = ({ item }) => (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        `relative flex flex-col items-center gap-x-1 hover:text-primary transition-colors duration-200 w-10 ${
          isActive
            ? "text-primary border-primary border-t-2"
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
    <div className="w-full fixed top-0 left-0 md:hidden flex items-end justify-center h-screen z-[999]">
      <div className="w-full px-5 pb-2 flex items-center justify-between space-x-2 bg-secondary-bg dark:bg-secondary-bg-dark">
        {navItems.map((item, index) => (
          <NavLinkItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NavForSmallerDevices;
