import React, { useEffect, useState } from "react";
import DefaultUserAvatar from "../DefaultUserAvatar";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const formate = {
  $collectionId: "67d43e81000f42b4c9e2",
  $createdAt: "2025-03-19T15:05:46.062+00:00",
  $databaseId: "67d43e3a000740115088",
  $id: "67dadd49002a98add6c6",
  $permissions: [
    "read(user:67d67a0d002ad146962b)",
    "update(user:67d67a0d002ad146962b)",
    "delete(user:67d67a0d002ad146962b)",
  ],
  $updatedAt: "2025-03-19T15:05:46.062+00:00",
  content: "new ",
  status: true,
  title: "",
  type: "post",
  user: "",
  userFile: null,
  visibility: "Anyone",
};

const PostCard = ({ post }) => {
  const { theme } = useSelector((state) => state.theme);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [showComments, setShowComments] = useState(false);
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));
  const [postData, setPostData] = useState({});

  useEffect(() => {
    setPostData({
      ...post,
      user: JSON.parse(post.user),
    });
  }, [post]);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const actionsButtons = [
    {
      title: "Like",
      icon: "ri-thumb-up-line",
      onClick: handleLike,
    },
    {
      title: "Comment",
      icon: "ri-chat-1-line",
      onClick: () => setShowComments(!showComments),
    },
    {
      title: "Share",
      icon: "ri-share-line",
      onClick: () => setShares(shares + 1),
    },
    {
      title: "Repost",
      icon: "ri-repeat-line",
      onClick: () => {},
    },
  ];

  const fomateCreatedAt = (createdAt) => {
    const currDate = new Date();
    const date = new Date(createdAt);
    if (currDate.getDate() - date.getDate() === 1) {
      return "Yesterday";
    } else if (currDate.getDate() - date.getDate() <= 0) {
      return "Today";
    } else {
      return currDate.getDate() - date.getDate() + " days ago";
    }
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm mt-4 px-4 pt-4 overflow-hidden">
      {/* Post header */}
      <div className="flex items-center justify-start">
        <DefaultUserAvatar
          height="h-10"
          width="w-10"
          variant={theme}
          className="mr-3"
        />
        
        {/* User Data */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-primary-text dark:text-primary-text-dark">
            {postData.user?.name}
          </h3>
          <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
            {fomateCreatedAt(postData.$createdAt)}
          </p>
        </div>
      </div>

      {/* Post content */}
      <div className="mt-4">
        <p className="text-primary-text dark:text-primary-text-dark mb-3">
          {postData.content}
        </p>
        {postData?.userFile && (
          <img
            src={postData.userFile}
            alt="Post"
            className="w-full h-auto object-cover mb-3"
          />
        )}
      </div>

      {/* Post stats */}
      <div className=" flex justify-end items-center py-2 text-secondary-text dark:text-secondary-text-dark text-sm">
        <span className="flex items-center mr-4">
          <i className="ri-thumb-up-line mr-1"></i> 234
        </span>
        <span className="flex items-center mr-4">
          <i className="ri-chat-1-line mr-1"></i> 234
        </span>
        <span className="flex items-center">
          <i className="ri-share-line mr-1"></i> 234
        </span>
      </div>

      {/* Post actions */}
      <div className="py-1 border-t border-border dark:border-border-dark flex justify-between">
        {actionsButtons.map((action) => (
          <button
            key={action.title}
            className={`flex items-center justify-center py-2 w-full ${
              liked
                ? "text-blue-500"
                : "text-secondary-text dark:text-secondary-text-dark"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors`}
            onClick={action.onClick}
          >
            <i className={`${action.icon} mr-2`}></i>
            <span>{action.title}</span>
          </button>
        ))}
      </div>

      {/* Post comments */}
      {showComments && (
        <div className="px-4 py-3 border-t border-border dark:border-border-dark">
          <div className="mb-3 last:mb-0">
            <div className="flex items-start">
              <div className="font-medium mr-2">John</div>
              <div>John Doe</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
