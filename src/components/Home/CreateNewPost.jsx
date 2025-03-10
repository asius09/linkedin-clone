import React, { useState } from "react";

const CreateNewPost = () => {
  const [postText, setPostText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted:", postText);
    setPostText("");
  };

  const btns = [
    {
      title: "Photo",
      icon: "ri-image-line",
      iconColor: "blue-500",
    },
    {
      title: "Video",
      icon: "ri-video-line",
      iconColor: "green-500",
    },
    {
      title: "Article",
      icon: "ri-article-line",
      iconColor: "amber-500",
    },
  ];

  const renderBtn = ({ title, icon, iconColor }) => {
    return (
      <button className="w-full h-full flex items-center justify-center py-3 text-secondary-text dark:text-secondary-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
        <i className={`${icon} text-${iconColor} mr-2`}></i>
        <span>{title}</span>
      </button>
    );
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4 mb-4">
      <div className="flex items-center justify-center mb-4 gap-3">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What do you want to talk about?"
            className="w-full border border-border dark:border-border-dark rounded-full py-3 px-4 bg-input-bg dark:bg-input-bg-dark resize-none focus:outline-none focus:ring-1 focus:ring-input-outline dark:focus:ring-input-outline-dark"
            rows="1"
          />
        </form>
      </div>

      <div className="flex justify-between items-center pt-1 border-t border-border dark:border-border-dark">
        {btns.map((btn) => renderBtn(btn))}
      </div>
    </div>
  );
};

export default CreateNewPost;
