import { useEffect, useState } from "react";

const Alert = ({
  type = "info",
  visible,
  children,
  className = "",
  variant = "toast",
  timeout = 1500,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const alertStyles = {
    success: "bg-green-100 border-green-400 text-green-700",
    error: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border-blue-400 text-blue-700",
  };

  const iconStyles = {
    success: "ri-check-line",
    error: "ri-close-line",
    warning: "ri-warning-line",
    info: "ri-information-line",
  };

  const variantStyles = {
    toast: "fixed top-20 left-10 w-80 p-4 border-l-4 rounded-lg shadow-lg",
    modal:
      "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
    banner: "fixed top-0 left-0 right-0 p-4",
  };

  const currentStyle = alertStyles[type] || alertStyles.info;
  const iconClass = iconStyles[type] || iconStyles.info;
  const variantStyle = variantStyles[variant] || variantStyles.toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [type, children]);

  if (!isVisible) return null;

  return (
    <div
      className={`${variantStyle} z-[999] transition-all ease-in-out duration-300 ${currentStyle} flex items-center space-x-4 opacity-100 transform translate-y-0 ${className}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...props}
    >
      <i className={`${iconClass} text-xl`}></i>
      <span className="flex-1 text-md font-semibold">{children}</span>
    </div>
  );
};

export default Alert;
