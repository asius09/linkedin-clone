import React from "react";

const DefaultUser = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg shadow-md">
      <i className="ri-user-3-fill text-gray-500 text-6xl" aria-hidden="true" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold text-gray-800">Default User</h2>
        <p className="text-sm text-gray-600">No profile available</p>
      </div>
    </div>
  );
};

export default DefaultUser;
