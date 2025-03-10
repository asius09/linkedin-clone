import React from "react";
import { Link } from "react-router";
import RenderNavLink from "./RenderNavLink";

const Navbar = () => {
  const navItems = [
    { icon: "ri-home-line", text: "Home", link: "home" },
    { icon: "ri-group-line", text: "My Network", link: "my-network" },
    { icon: "ri-briefcase-line", text: "Jobs", link: "jobs" },
    { icon: "ri-message-2-line", text: "Messages", link: "messages" },
    {
      icon: "ri-notification-3-line",
      text: "Notifications",
      link: "notifications",
    },
  ];

  return (
    <nav className="w-full sticky top-0 z-[999] bg-secondary-bg dark:bg-secondary-bg-dark border-b border-border dark:border-border-dark pt-3 pb-1 px-6">
      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-input-bg dark:bg-input-bg-dark rounded-md py-2 px-4 pl-10 text-sm w-72"
            />
            <i className="ri-search-line absolute left-3 top-2.5 text-secondary-text dark:text-secondary-text-dark"></i>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <RenderNavLink key={index} item={item} />
          ))}
          <div className="border-l border-border dark:border-border-dark h-8 mx-2 pl-4"></div>
          <div className="flex items-center space-x-2 text-secondary-text dark:text-secondary-text-dark hover:text-primary cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Amilly</span>
            <i className="ri-arrow-down-s-line text-xs transition-transform group-hover:rotate-180"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
