import React from "react";

const Buttons = React.forwardRef(
  (
    {
      variant = "hollow",
      icon,
      children,
      type = "submit",
      className = "",
      disabled = false,
      miniWidth = false,
      ...props
    },
    ref
  ) => {
    const styles = {
      hollow:
        "btn border border-primary text-primary dark:text-primary transition-all duration-300 transform cursor-pointer rounded-full hover:bg-primary hover:text-white",
      filled:
        "btn bg-primary text-primary-text-dark transition-all duration-300 transform cursor-pointer rounded-full hover:bg-primary-hover",
      transparent:
        "btn border border-border dark:border-border-dark text-primary-text dark:text-primary-text-dark transition-all duration-300 transform cursor-pointer rounded-full hover:bg-border dark:hover:bg-border-dark hover:text-primary-text",
    };

    const buttonStyle = styles[variant];
    const miniWidthStyle = miniWidth ? "min-w-[8rem]" : "";

    return (
      <button
        ref={ref}
        type={type}
        className={`${buttonStyle} ${miniWidthStyle} ${className}`}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

export default Buttons;
