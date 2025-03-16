import { useEffect, useState } from "react";

const Alert = ({ type = "info", children }) => {
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

  const currentStyle = alertStyles[type] || alertStyles.info;
  const iconClass = iconStyles[type] || iconStyles.info;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [type, children]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-20 left-10 w-80 p-4 border-l-4 rounded-lg shadow-lg z-[999] transition-all ease-in-out duration-300 ${currentStyle} flex items-center space-x-4 opacity-100 transform translate-y-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <i className={`${iconClass} text-xl`}></i>
      <span className="flex-1 text-md font-semibold">{children}</span>
    </div>
  );
};

export default Alert;
