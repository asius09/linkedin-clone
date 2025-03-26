import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import UserAvatar from "../common/UserAvatar";
import ROUTES, { getProfileRoute } from "../../routes/routes";

const SidebarProfile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const actionsLinks = [
    {
      title: "Saved Items",
      icon: "ri-bookmark-line",
      link: ROUTES.HOME,
    },
    {
      title: "Groups",
      icon: "ri-group-line",
      link: ROUTES.HOME,
    },
    {
      title: "Newsletters",
      icon: "ri-news-line",
      link: ROUTES.HOME,
    },
    {
      title: "Events",
      icon: "ri-calendar-line",
      link: ROUTES.HOME,
    },
  ];
  const profileLink = getProfileRoute(
    `${currentUser?.name}/${currentUser?.$id}`
  );
  return (
    <>
      <div className="relative bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
        <Link to={profileLink} className="w-full h-full cursor-pointer">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
          <UserAvatar
            size={60}
            iconSize={2}
            className="absolute top-8 left-4 border-2 border-primary-text-dark"
            imgURL={currentUser?.avatar || ""}
          />

          <div className="mt-10 px-4 pb-4">
            <h3 className="text-lg font-semibold">{currentUser?.name}</h3>
            <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
              {currentUser?.role || ""}
            </p>

            <div className="mt-3 pt-3 border-t border-border dark:border-border-dark">
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark mb-2 flex justify-between items-center">
                <span>Profile views</span>
                <span className="font-medium text-primary">128</span>
              </p>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark flex justify-between items-center">
                <span>Connection network</span>
                <span className="font-medium text-primary">1,543</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-2 bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-2">
        {actionsLinks.map((link) => (
          <Link
            key={link.title}
            to={link.link}
            className="flex items-center gap-2 p-2 text-secondary-text dark:text-secondary-text-dark hover:bg-primary/5 rounded-md transition-colors"
          >
            <i className={`${link.icon} text-lg`}></i>
            <span className="text-sm">{link.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SidebarProfile;
