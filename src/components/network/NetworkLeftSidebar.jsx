import React from "react";

const NetworkLeftSidebar = () => {
  const networkItems = [
    { title: "Connections", count: 38 },
    { title: "Contacts", count: 159 },
    { title: "Following & followers", count: null },
    { title: "Groups", count: null },
    { title: "Events", count: null },
    { title: "Pages", count: 7 },
    { title: "Newsletters", count: null },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm py-4 px-3">
      <h2 className="font-semibold text-lg mb-4 text-primary-text dark:text-primary-text-dark pl-3">
        Manage my network
      </h2>
      <ul className="space-y-2">
        {networkItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
          >
            <span className="text-primary-text dark:text-primary-text-dark font-semibold">
              {item.title}
            </span>
            {item.count && (
              <span className="text-primary text-md font-bold">
                {item.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetworkLeftSidebar;
