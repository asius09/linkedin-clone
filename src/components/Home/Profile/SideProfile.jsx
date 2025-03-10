import React from "react";

const SideProfile = () => {
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
      title: "Newsletters",
      icon: "ri-news-line",
      link: "/newsletters",
    },
    {
      title: "Events",
      icon: "ri-calendar-line",
      link: "/events",
    },
  ];
  return (
    <>
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
        <div className="relative">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        </div>
      </div>
      <div className="mt-2 bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-2">
        {actionsLinks.map((link) => (
          <a
            key={link.title}
            href={link.link}
            className="flex items-center gap-2  p-2 text-secondary-text dark:text-secondary-text-dark hover:bg-primary/5 rounded-md transition-colors"
          >
            <i className={`${link.icon} text-lg`}></i>
            <span className="text-sm">{link.title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SideProfile;
