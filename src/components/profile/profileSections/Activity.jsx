import React, { useState } from "react";

const Activity = ({ section }) => {
  const { content } = section;
  const [filter, setFilter] = useState("posts");

  const filteredContent = { [filter]: content[filter] };

  const filterButtons = Object.keys(content);

  const user = {
    name: "Amilly Johnson",
    title: "Senior Product Designer",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
    location: "San Francisco, California",
    contactInfo: {
      email: "amilly.johnson@example.com",
      phone: "(555) 123-4567",
    },
    portfolio: "https://www.linkedin.com/in/amilly-johnson",
  };

  const renderContent = (filter, data) => {
    switch (filter) {
      case "posts":
        return (
          <div className="w-full flex flex-col gap-2 border-b-2 border-border dark:border-border-dark px-4 py-2 text-primary-text dark:text-primary-text-dark">
            <p className="flex items-center gap-2 text-secondary-text dark:text-secondary-text-dark text-xs">
              <span className="font-semibold">{user.name}</span>
              Posted • {data.date}
            </p>
            <div className="flex gap-2">
              {data.image && (
                <img
                  src={data.image}
                  alt="Post"
                  className="w-20 h-15 rounded-lg"
                />
              )}
              <p>{data.content}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-secondary-text dark:text-secondary-text">
              <span className="flex items-center justify-center gap-1 font-semibold">
                {data.likes}
                <i className="ri-thumb-up-fill font-medium"></i>
              </span>
              <span className="flex items-center justify-center gap-1 font-semibold">
                {data.comments}
                <i className="ri-chat-3-fill font-medium"></i>
              </span>
            </div>
          </div>
        );
      case "comments":
        return (
          <div className="w-full border-b-2 border-border dark:border-border-dark p-4 rounded-lg">
            <p className="font-semibold mb-2">{user.name} commented:</p>
            <p>{data.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              Likes: {data.likes} • {data.date}
            </p>
          </div>
        );
      case "videos":
        return (
          <div className="w-full border-b-2 border-border dark:border-border-dark p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{data.title}</h3>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <video
                src={data.thumbnail}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                controls
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <span>{data.views} views</span>
              <span>{data.likes} likes</span>
              <span>{data.date}</span>
            </div>
          </div>
        );
      case "images":
        return (
          <div className="w-full border-b-2 border-border dark:border-border-dark p-4 rounded-lg">
            <img
              src={data.url}
              alt={data.title}
              className="w-full rounded-lg"
            />
            <h3 className="font-semibold mt-2">{data.title}</h3>
            <p className="text-sm text-gray-500">
              Likes: {data.likes} • {data.date}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow-lg rounded-lg p-6 my-2 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {section.title}
        </h2>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
            Create Post
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 text-gray-600 hover:text-primary transition-colors duration-300">
            <i className="ri-pencil-line text-xl"></i>
          </button>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filterButtons.map((button) => (
          <button
            key={button}
            onClick={() => setFilter(button)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === button
                ? "bg-primary text-white"
                : "text-primary border border-primary dark:border-primary"
            }`}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredContent[filter].data.map((item) => (
          <div key={item.id}>{renderContent(filter, item)}</div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
