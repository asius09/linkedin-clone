import React from "react";

const Buttons = ({
  variant = "hollow",
  icon,
  children,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "w-full flex items-center justify-center px-4 py-3 rounded-full transition-all duration-300 transform cursor-pointer";
  const styles = {
    hollow: `border border-primary text-primary dark:text-primary ${baseStyles} hover:bg-primary hover:text-white`,
    filled: `bg-primary text-primary-text-dark ${baseStyles} hover:bg-primary-hover`,
    transparent: `border border-border dark:border-border-dark text-primary-text dark:text-primary-text-dark ${baseStyles} hover:bg-border dark:hover:bg-border-dark hover:text-primary-text`,
    // Add more variants as needed
  };

  return (
    <button type={type} className={`${styles[variant]} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Buttons;
