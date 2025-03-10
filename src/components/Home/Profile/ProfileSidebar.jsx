import React from "react";
import { Link } from "react-router";

const ProfileSidebar = () => {
  const actionsLinks = [
    {
      title: "Saved Items",
      icon: "ri-bookmark-line",
      link: "/saved-items",
    },
    {
      title: "Groups",
      icon: "ri-group-line",
      link: "/groups",
    },
    {
      title: "Events",
      icon: "ri-calendar-line",
      link: "/events",
    },
    {
      title: "Newsletters",
      icon: "ri-news-line",
      link: "/newsletters",
    },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
      <div className="relative">
        <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white absolute -bottom-8 left-4 object-cover"
        />
      </div>

      <div className="mt-10 px-4 pb-4">
        <h3 className="text-lg font-semibold">Amilly Johnson</h3>
        <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
          Senior Product Designer at Design Co.
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

        <div className="mt-3 pt-3 border-t border-border dark:border-border-dark">
          <h4 className="text-xs text-secondary-text dark:text-secondary-text-dark font-semibold mb-2">
            My items
          </h4>
          <ul className="space-y-2">
            {actionsLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="flex items-center text-sm text-primary-text dark:text-primary-text-dark hover:text-primary"
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
