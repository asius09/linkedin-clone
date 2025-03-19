import React from "react";

const Buttons = ({
  variant = "hollow",
  icon,
  children,
  type = "submit",
  className = "",
  disabled = false,
  miniWidth = false, // Add miniWidth prop
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center transition-all duration-300 transform cursor-pointer px-4 py-3 rounded-full";
  const commonStyles = `btn ${baseStyles}`;
  const miniWidthStyle = miniWidth ? "min-w-[8rem]" : ""; // Apply mini width if miniWidth is true
  const styles = {
    hollow: `border border-primary text-primary dark:text-primary ${commonStyles} ${miniWidthStyle} hover:bg-primary hover:text-white`,
    filled: `bg-primary text-primary-text-dark ${commonStyles} ${miniWidthStyle} hover:bg-primary-hover`,
    transparent: `border border-border dark:border-border-dark text-primary-text dark:text-primary-text-dark ${commonStyles} ${miniWidthStyle} hover:bg-border dark:hover:bg-border-dark hover:text-primary-text`,
    // Add more variants as needed
  };

  return (
    <button
      type={type}
      className={`${styles[variant]} ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Buttons;
