import React, { useEffect, useState, useRef, useMemo } from "react";
import DefaultUserAvatar from "../DefaultUserAvatar";
import { useSelector, useDispatch } from "react-redux";
import fileService from "../../services/fileService";
import { setIsPostDeleteModalOpen } from "../../features/postSlice";

const PostCard = ({ post }) => {
  const { user: current } = useSelector((state) => state.auth);
  const { isPostDeleteModalOpen } = useSelector((state) => state.post);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [showComments, setShowComments] = useState(false);
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));
  const [postData, setPostData] = useState({});
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [isUserActionsOpen, setIsUserActionsOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [loadingPreview, setLoadingPreview] = useState(false);

  const userActionRef = useRef(null);

  const handleLike = () => {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
  };

  const handlePostDelete = async () => {
    if (isPostDeleteModalOpen.state) return;
    dispatch(
      setIsPostDeleteModalOpen({
        state: true,
        postId: postData.$id,
        fileId: postData.userFile || null,
      })
    );
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const actionsButtons = useMemo(
    () => [
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
    ],
    [handleLike, setShowComments, setShares, handlePostDelete]
  );

  const userActions = useMemo(
    () =>
      isCurrentUser
        ? [
            {
              title: "Edit",
              icon: "ri-edit-line",
              onClick: () => {},
            },
            {
              title: "Delete",
              icon: "ri-delete-bin-line",
              onClick: () => {
                handlePostDelete();
                setIsUserActionsOpen(false);
              },
            },
          ]
        : [
            {
              title: "Save",
              icon: "ri-bookmark-line",
              onClick: () => {},
            },
            {
              title: "Report",
              icon: "ri-flag-line",
              onClick: () => {},
            },
          ],
    [isCurrentUser, handlePostDelete]
  );

  const handleUserActions = () => {
    setIsUserActionsOpen(!isUserActionsOpen);
  };

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

  const getPreview = async () => {
    if (!postData.userFile) return;
    setLoadingPreview(true);
    try {
      const preview = await fileService.getFilePreview({
        fileId: postData.userFile,
      });
      setPreview(preview);
    } catch (error) {
      console.error("Error getting preview:", error.message);
    } finally {
      setLoadingPreview(false);
    }
  };

  useEffect(() => {
    setPostData({
      ...post,
      user: JSON.parse(post.user),
    });
  }, [post]);

  useEffect(() => {
    const currUser = postData.user;
    setIsCurrentUser(currUser?.$id === current?.$id);
    getPreview();
  }, [postData]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        userActionRef.current &&
        !userActionRef.current.contains(event.target)
      ) {
        setIsUserActionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm mt-4 px-4 pt-4 overflow-hidden">
      {/* Post header */}
      <div className="relative w-full flex items-start justify-between">
        <div className="flex items-center justify-start">
          {/* User Avatar */}
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
        {/* User Actions */}
        <button
          onClick={handleUserActions}
          className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-more-2-fill"></i>
        </button>
        {isUserActionsOpen && (
          <div
            ref={userActionRef}
            className="absolute top-5 right-5 mt-2 w-56 bg-secondary-bg dark:bg-secondary-bg-dark rounded-md shadow-lg z-10 border border-border dark:border-border-dark"
          >
            <ul>
              {userActions.map((action) => (
                <li
                  key={action.title}
                  className="px-4 py-2 hover:bg-secondary-bg-hover dark:hover:bg-secondary-bg-hover-dark cursor-pointer transition-colors"
                  onClick={action.onClick}
                >
                  <i className={`${action.icon} mr-2`}></i>
                  {action.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Post header end */}

      {/* Post content */}
      <div className="mt-4 text-md">
        <p className="text-primary-text dark:text-primary-text-dark mb-3">
          {postData.content}
        </p>
        {preview && (
          <img
            src={preview}
            alt="Post"
            className="w-full h-auto object-cover mb-3"
            loading="lazy"
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
