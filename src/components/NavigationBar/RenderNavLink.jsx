import React from "react";
import { NavLink } from "react-router";

const RenderNavLink = ({ item }) => {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) => `flex items-center gap-1 text-secondary-text dark:text-secondary-text-dark hover:text-primary transition-colors duration-200 border-b-2 ${
          isActive
            ? "border-primary text-primary"
            : "border-transparent hover:border-primary/50"
        }`}
    >
      <i className={`${item.icon} text-lg`}></i>
      <span className="text-sm font-medium">{item.text}</span>
    </NavLink>
  );
};

export default RenderNavLink;
