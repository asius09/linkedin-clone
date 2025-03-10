import React from "react";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
        <div className="relative">
          <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white absolute -bottom-12 left-6 object-cover"
          />
        </div>

        <div className="mt-16 px-6 pb-6">
          <h1 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark">
            Amilly Johnson
          </h1>
          <p className="text-secondary-text dark:text-secondary-text-dark">
            Senior Product Designer at Design Co.
          </p>

          <p className="mt-3 text-sm">
            Creating user-centered designs that solve real problems. Passionate
            about accessibility and inclusive design.
          </p>

          <div className="mt-4 text-sm text-secondary-text dark:text-secondary-text-dark">
            <p className="flex items-center gap-2 mb-1">
              <i className="ri-map-pin-line"></i> San Francisco, California
            </p>
            <p className="flex items-center gap-2">
              <i className="ri-links-line"></i> designportfolio.com
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium">
              Connect
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-medium">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default Profile;
