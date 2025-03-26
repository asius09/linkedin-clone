import React from "react";

const UserAvatar = ({
  className = "",
  size = 48,
  imgURL = "",
  iconSize = 1,
}) => {
  return (
    <figure
      aria-label="Profile Avatar"
      role="img"
      tabIndex={0}
      className={`flex items-center justify-center overflow-hidden shrink-0 bg-gray-400 rounded-full ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {imgURL ? (
        <img
          src={imgURL}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <i
          className={`ri-user-3-fill text-gray-200`}
          style={{ fontSize: `${iconSize}rem` }}
        ></i>
      )}
    </figure>
  );
};

export default UserAvatar;
