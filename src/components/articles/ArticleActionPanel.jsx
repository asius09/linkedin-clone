import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../common/UserAvatar";
import ReactionBtn from "../ui/ReactionBtn";
import Buttons from "../ui/Buttons";
import InputField from "../form/InputField";

const ArticleActionPanel = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const [reactionStats, setReactionsStats] = useState({
    likes: false,
    shares: false,
    comments: false,
  });

  const handleReaction = (reactionType) => {
    setReactionsStats((prev) => ({
      ...prev,
      [reactionType]: !prev[reactionType],
    }));
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: commentInput,
          user: currentUser,
          timestamp: new Date().toISOString(),
        },
      ]);
      setCommentInput("");
    }
  };

  const reactionsButtons = useMemo(
    () => [
      {
        title: "Like",
        textColor: reactionStats.likes
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactionStats.likes ? "ri-thumb-up-fill" : "ri-thumb-up-line",
        onClick: () => handleReaction("likes"),
      },
      {
        title: "Comment",
        textColor: reactionStats.comments
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactionStats.comments ? "ri-chat-1-fill" : "ri-chat-1-line",
        onClick: () => handleReaction("comments"),
      },
      {
        title: "Share",
        textColor: reactionStats.shares
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactionStats.shares ? "ri-share-fill" : "ri-share-line",
        onClick: () => handleReaction("shares"),
      },
    ],
    [reactionStats]
  );

  const NoCommentsCTA = () => {
    return (
      <div
        id="no-comments-cta"
        className="w-full h-1/2 flex flex-col justify-center items-center"
      >
        <h1 className="text-primary-text dark:text-primary-text-dark text-2xl">
          No comments, yet.
        </h1>
        <p className="text-secondary-text dark:text-secondary-text-dark">
          Be the first to comment
        </p>
        <Buttons variant={"hollow"} className={"mt-4 font-semibold px-3 py-2"}>
          Start the conversation
        </Buttons>
      </div>
    );
  };

  return (
    <div className="static bg-secondary-bg dark:bg-secondary-bg-dark w-full h-96 min-h-96 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <UserAvatar
          size={36}
          iconSize={1.5}
          imgURL={currentUser?.avatar || ""}
        />
        {reactionsButtons?.map((btn, index) => (
          <ReactionBtn key={index} reaction={btn} />
        ))}
      </div>

      {/* Comment Input */}
      <form onSubmit={handleComment}>
        <div className="flex gap-2 w-full px-4">
          <InputField
            type={"text"}
            name={"comment"}
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder={"Add a comment"}
            required={true}
            className={"w-full"}
            inputClassName={"rounded-4xl"}
          />
          <Buttons
            type="submit"
            variant={"filled"}
            className="rounded-4xl px-4 py-2"
          >
            Comment
          </Buttons>
        </div>
      </form>

      {/* Comments Section */}
      {comments.length > 0 ? (
        <div className="">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-3">
              <UserAvatar size={32} imgURL={comment.user?.avatar || ""} />
              <div className="flex-1">
                <p className="text-sm font-medium text-primary-text dark:text-primary-text-dark">
                  {comment.user?.name || "Anonymous"}
                </p>
                <p className="text-sm text-primary-text dark:text-primary-text-dark">
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoCommentsCTA />
      )}
    </div>
  );
};

export default ArticleActionPanel;
