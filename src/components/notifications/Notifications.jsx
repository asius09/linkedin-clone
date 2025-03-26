import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, text: "John Smith commented on your post", time: "2h ago" },
    { id: 2, text: "Emma Watson liked your article", time: "4h ago" },
    { id: 3, text: "New job recommendations for you", time: "1d ago" },
  ];
  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
      <div className="flex items-center justify-between mb-2 cursor-pointer">
        <h3 className="font-semibold text-primary-text dark:text-primary-text-dark">
          Notifications
        </h3>
        <a href="#" className="text-sm text-primary hover:underline">
          See all
        </a>
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start py-2 border-b border-border dark:border-border-dark last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-md px-2"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <p className="text-sm text-primary-text dark:text-primary-text-dark mb-0">
                {notification.text}
              </p>
              <span className="text-xs text-secondary-text dark:text-secondary-text-dark">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
