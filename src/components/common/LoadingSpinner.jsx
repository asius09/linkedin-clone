import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <i className="ri-loader-2-fill animate-spin text-2xl text-gray-400 dark:text-gray-600 animate-gradient-primary" />
    </div>
  );
};

export default LoadingSpinner;
