import React from "react";
import { useSelector } from "react-redux";

const DefaultUserAvatar = ({
  height = "h-10",
  width = "w-10",
  className = "",
}) => {
  const iconSize = {
    "h-8 w-8": "text-3xl",
    "h-10 w-10": "text-4xl",
    "h-12 w-12": "text-5xl",
  };
  const { theme } = useSelector((state) => state.theme);
  return (
    <div
      className={`flex items-center justify-center relative rounded-full overflow-hidden ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800"
      } ${className} ${height} ${width}`}
    >
      <i
        className={`ri-user-3-fill absolute -bottom-1.5 ${
          theme === "light" ? "text-gray-800" : "text-gray-500"
        } ${iconSize[`${height} ${width}`]}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default DefaultUserAvatar;
