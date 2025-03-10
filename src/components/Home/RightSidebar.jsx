import React from "react";

const RightSidebar = () => {
  const notifications = [
    { id: 1, text: "John Smith commented on your post", time: "2h ago" },
    { id: 2, text: "Emma Watson liked your article", time: "4h ago" },
    { id: 3, text: "New job recommendations for you", time: "1d ago" },
  ];

  const suggestedConnections = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "UX Designer at Design Co.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Software Engineer at Tech Inc.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Notifications Panel */}
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
              className="flex items-start py-2 border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-md px-2"
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

      {/* Suggested Connections */}
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">People you may know</h3>
          <a href="#" className="text-sm text-primary hover:underline">
            See all
          </a>
        </div>
        <div className="space-y-4">
          {suggestedConnections.map((connection) => (
            <div key={connection.id} className="flex items-start">
              <img
                src={connection.img}
                alt={connection.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{connection.name}</p>
                <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                  {connection.title}
                </p>
                <button className="mt-1 text-xs px-3 py-1 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry News */}
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Industry News</h3>
          <a href="#" className="text-sm text-primary hover:underline">
            More
          </a>
        </div>
        <div className="space-y-3">
          <a
            href="#"
            className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
          >
            <p className="text-sm font-medium">
              Tech industry sees 12% growth in Q2 2023
            </p>
            <p className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1">
              1,240 readers
            </p>
          </a>
          <a
            href="#"
            className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
          >
            <p className="text-sm font-medium">
              New AI regulations proposed by EU commission
            </p>
            <p className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1">
              864 readers
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
