import React, { useState } from "react";
import SideProfile from "../components/SideProfile.jsx";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "connection",
      name: "Sarah Johnson",
      action: "accepted your connection request",
      time: "2h ago",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
      read: false,
    },
    {
      id: 2,
      type: "post",
      name: "Michael Chen",
      action: "liked your post about web development",
      time: "5h ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
      read: false,
    },
    {
      id: 3,
      type: "job",
      name: "LinkedIn Jobs",
      action: "new jobs matching your skills are available",
      time: "1d ago",
      avatar: "/logo.svg",
      read: true,
    },
    {
      id: 4,
      type: "birthday",
      name: "Emily Wilson",
      action: "is celebrating their birthday today",
      time: "10h ago",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const getIconByType = (type) => {
    switch (type) {
      case "connection":
        return "ri-user-add-line";
      case "post":
        return "ri-thumb-up-line";
      case "job":
        return "ri-briefcase-line";
      case "birthday":
        return "ri-cake-line";
      default:
        return "ri-notification-3-line";
    }
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[250px_1fr_350px] gap-5">
        <aside className="">
          <SideProfile />
        </aside>
        <main className="">
          <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-border dark:border-border-dark">
              <h1 className="text-xl font-semibold text-primary-text dark:text-primary-text-dark">
                Notifications
              </h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-primary hover:text-primary-hover font-medium"
                >
                  Mark all as read
                </button>
                <button className="text-secondary-text dark:text-secondary-text-dark hover:text-primary">
                  <i className="ri-settings-3-line text-xl"></i>
                </button>
              </div>
            </div>

            <div className="divide-y divide-border dark:divide-border-dark">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`p-4 flex items-start hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors ${
                      !notification.read ? "bg-blue-50 dark:bg-blue-900/20" : ""
                    }`}
                  >
                    <div className="relative mr-3 flex-shrink-0">
                      <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="w-12 h-12 rounded-full object-cover border border-border dark:border-border-dark"
                      />
                      <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1">
                        <i
                          className={`${getIconByType(
                            notification.type
                          )} text-xs`}
                        ></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-text dark:text-primary-text-dark">
                        <span className="font-semibold">
                          {notification.name}
                        </span>{" "}
                        {notification.action}
                      </p>
                      <span className="text-sm text-secondary-text dark:text-secondary-text-dark">
                        {notification.time}
                      </span>
                    </div>
                    {!notification.read && (
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-secondary-text dark:text-secondary-text-dark">
                  No notifications to show
                </div>
              )}
            </div>
          </div>
        </main>
        <aside className="">
          <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
            <h2 className="text-lg font-medium mb-3 text-primary-text dark:text-primary-text-dark">
              Notification Settings
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-primary-text dark:text-primary-text-dark">
                  Email notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-text dark:text-primary-text-dark">
                  Push notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-text dark:text-primary-text-dark">
                  SMS notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Notifications;
