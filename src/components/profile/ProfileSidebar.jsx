import React from "react";
import { PeopleYouMayKnow } from "../../components/profile";

const ProfileSidebar = ({ profileLink = "profile/:user/:userId" }) => {
  return (
    <div className="space-y-4">
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4 text-secondary-text dark:text-secondary-text-dark">
        <div className="space-y-2 border-b-1 border-border dark:border-border-dark py-2 last:border-b-0">
          <div className="w-full flex justify-between items-center text-xl font-semibold">
            <h2>Profile Language</h2>
            <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center cursor-pointer">
              <i className="ri-pencil-line font-light"></i>
            </button>
          </div>
          <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
            English
          </p>
        </div>
        <div className="space-y-2 border-b-1 border-border py-2 last:border-b-0">
          <div className="w-full flex justify-between items-center text-xl font-semibold">
            <h2>Public Profile Url</h2>
            <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center cursor-pointer">
              <i className="ri-pencil-line font-light"></i>
            </button>
          </div>
          <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
            {profileLink}
          </p>
        </div>
      </div>
      <PeopleYouMayKnow grid={false} suggestions={5} />
    </div>
  );
};

export default ProfileSidebar;
