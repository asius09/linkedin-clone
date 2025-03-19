import React from "react";

const DefaultUserAvatar = ({
  height = "h-10",
  width = "w-10",
  className = "",
  variant = "light",
}) => {
  const iconSize = {
    "h-8 w-8": "text-3xl",
    "h-10 w-10": "text-4xl",
    "h-12 w-12": "text-5xl",
  };

  return (
    <div
      className={`flex items-center justify-center relative rounded-full overflow-hidden ${
        variant === "light" ? "bg-gray-200" : "bg-gray-800"
      } ${className} ${height} ${width}`}
    >
      <i
        className={`ri-user-3-fill absolute -bottom-1.5 ${
          variant === "light" ? "text-gray-800" : "text-gray-500"
        } ${iconSize[`${height} ${width}`]}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default DefaultUserAvatar;
