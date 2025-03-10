import React, { useState } from "react";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
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
      onClick: () => {},
    },
    {
      title: "Repost",
      icon: "ri-repeat-line",
      onClick: () => {},
    },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm mt-4 px-4 pt-4 overflow-hidden">
      {/* Post header */}
      <div className="flex items-center justify-start">
        <img
          src={
            post.author.profileImage ||
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={post.author.name}
          className="w-16 h-16 rounded-full object-cover mr-3"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-primary-text dark:text-primary-text-dark">
            {post.author.name}
          </h3>
          <p className="text-xm text-secondary-text dark:text-secondary-text-dark">
            {post.author.title}
          </p>
          <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
            {post.timestamp}
          </p>
        </div>
      </div>

      {/* Post content */}
      <div className="mt-4">
        <p className="text-primary-text dark:text-primary-text-dark mb-3">
          {post.content}
        </p>
        {post?.image && (
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto object-cover mb-3"
          />
        )}
      </div>

      {/* Post stats */}
      <div className=" flex justify-end items-center py-2 text-secondary-text dark:text-secondary-text-dark text-sm">
        <span className="flex items-center mr-4">
          <i
            className={`${
              liked ? "ri-thumb-up-fill text-blue-500" : "ri-thumb-up-line"
            } mr-1`}
          ></i>{" "}
          {likes}
        </span>
        <span className="flex items-center mr-4">
          <i className="ri-chat-1-line mr-1"></i> {post.comments?.length || 0}
        </span>
        <span className="flex items-center">
          <i className="ri-share-line mr-1"></i> {post.shares || 0}
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

      {showComments && (
        <div className="px-4 py-3 border-t border-border dark:border-border-dark">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="mb-3 last:mb-0">
                <div className="flex items-start">
                  <div className="font-medium mr-2">{comment.author}:</div>
                  <div>{comment.content}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-secondary-text dark:text-secondary-text-dark text-sm">
              No comments yet
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
