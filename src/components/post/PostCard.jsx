import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import fileService from "../../services/fileService";
import { setDeleteContent } from "../../store/slices/contentSlice";
import UserAvatar from "../common/UserAvatar";
import VideoPlayer from "../mediaHandlers/VideoPlayer";
import formateDate from "../../utils/formateDate";
import { ReactionBtn } from "../ui";
import { toggleFeatureFlags } from "../../store/slices/featureFlagsSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isPostDeleteModalOpen } = useSelector(
    (state) => state.featureFlags.featureFlags
  );

  const videoRef = useRef(null);
  const userActionRef = useRef(null);

  const [postData, setPostData] = useState({}); //postData which gonna use
  const [isCurrentUser, setIsCurrentUser] = useState(false); //check weather the author of post is current user or not
  const [isUserActionsOpen, setIsUserActionsOpen] = useState(false); //post user actions like save report, delete etc...
  const [fileType, setFileType] = useState(""); //for post file type weather image or video
  const [preview, setPreview] = useState(null); //for getting the preview link

  //reactions on the post from user...
  const [reactions, setReactions] = useState({
    likes: false,
    shares: false,
    comments: false,
  });

  //handling torant the post content..
  const content = postData?.content;
  const maxLength = 80;
  const isLong = content?.length > maxLength;
  const [isExpanded, setIsExpanded] = useState(isLong);
  const displayContent = isExpanded ? content : content?.slice(0, maxLength);

  // ✅ Toggle reactions (Add/Remove on click)
  const handleReaction = (type) => {
    setReactions((prev) => ({
      ...prev,
      [type]: !prev[type], // Toggle the reaction
    }));
  };

  //if isCurrentUser is author then delete options avail
  const handlePostDelete = useCallback(() => {
    if (isPostDeleteModalOpen) return;
    dispatch(
      setDeleteContent({
        type: "post",
        contentId: postData.$id,
        fileId: postData.userFile || null,
      })
    );
    dispatch(toggleFeatureFlags({ flag: "isPostDeleteModelOpen" }));
  }, [dispatch, isPostDeleteModalOpen, postData]);

  const handleShowComments = () => handleReaction("comments");

  // Post actions buttons with toggle logic
  const actionsButtons = useMemo(
    () => [
      {
        title: "Like",
        textColor: reactions.likes
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactions.likes ? "ri-thumb-up-fill" : "ri-thumb-up-line",
        onClick: () => handleReaction("likes"),
      },
      {
        title: "Comment",
        textColor: reactions.comments
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactions.comments ? "ri-chat-1-fill" : "ri-chat-1-line",
        onClick: handleShowComments,
      },
      {
        title: "Share",
        textColor: reactions.shares
          ? "text-primary"
          : "text-primary-text dark:text-primary-text-dark",
        icon: reactions.shares ? "ri-share-fill" : "ri-share-line",
        onClick: () => handleReaction("shares"),
      },
      {
        title: "Repost",
        icon: "ri-repeat-line",
        onClick: () => {},
      },
    ],
    [reactions, handleShowComments]
  );

  //handling userActions...
  const userActions = useMemo(
    () =>
      isCurrentUser
        ? [
            { title: "Edit", icon: "ri-edit-line", onClick: () => {} },
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
            { title: "Save", icon: "ri-bookmark-line", onClick: () => {} },
            { title: "Report", icon: "ri-flag-line", onClick: () => {} },
          ],
    [isCurrentUser, handlePostDelete]
  );

  const handleUserActions = () => setIsUserActionsOpen((prev) => !prev);

  // Fetch Preview
  const getPreview = useCallback(async () => {
    if (!postData.userFile) return;
    try {
      const preview = fileService.getFilePreview({
        fileId: postData.userFile,
      });
      const file = await fileService.getFile({
        fileId: postData.userFile,
      });
      setPreview(preview);
      const type = file.mimeType && file.mimeType.split("/")[0];
      setFileType(type || "");
    } catch (error) {
      console.error("Error getting preview:", error.message);
    }
  }, [postData]);

  // ✅ Set post data on mount
  useEffect(() => {
    let parsedUser;
    // If post.user is a string, try to parse it; otherwise, use it as-is.
    if (typeof post.user === "string") {
      try {
        parsedUser = JSON.parse(post.user);
      } catch (error) {
        console.error("Error parsing user JSON:", error);
        parsedUser = {
          name: "Unknown",
          $id: `unknow-${Math.floor(Math.random() * 1000000)}`,
        }; // fallback
      }
    } else {
      parsedUser = post.user;
    }
    setPostData({ ...post, user: parsedUser });
  }, [post]);

  // Set currentUser and get preview
  useEffect(() => {
    setIsCurrentUser(postData?.user?.$id === currentUser?.$id);
    getPreview();
  }, [postData]);

  // ✅ Close user actions on outside click
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
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm mt-4 px-4 pt-4 overflow-hidden">
      {/* Post Header */}
      <div className="relative w-full flex items-start justify-between">
        <div className="flex items-center">
          <UserAvatar size={48} iconSize={2} className="mr-3" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {postData.user?.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {formateDate(postData.$createdAt, "diff")}
            </p>
          </div>
        </div>

        {/* User Actions */}
        <button
          onClick={handleUserActions}
          className="w-10 h-10 rounded-full hover:bg-secondary-bg-hover dark:hover:bg-secondary-bg-hover-dark transition-colors duration-200 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-more-2-fill"></i>
        </button>

        {isUserActionsOpen && (
          <div
            ref={userActionRef}
            className="absolute top-12 right-0 w-56 bg-secondary-bg dark:bg-secondary-bg-dark rounded-md shadow-lg z-10 border border-border dark:border-border-dark"
          >
            <ul>
              {userActions.map((action) => (
                <li
                  key={action.title}
                  className="px-4 py-2 hover:bg-secondary-bg-hover  dark:hover:bg-secondary-bg-hover-dark cursor-pointer transition-colors"
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

      {/* Post Content */}
      <div className="mt-4 text-md">
        <p className="text-primary-text dark:text-primary-text-dark mb-3 whitespace-pre-wrap">
          {displayContent} {""}
          <br />
          {isLong ? (
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-primary hover:text-primary-hover underline text-xs"
            >
              {isExpanded ? "show less" : "show more"}
            </button>
          ) : null}
        </p>
        {preview &&
          (fileType === "image" ? (
            <img
              src={preview}
              alt="Post"
              className="w-full h-auto object-cover mb-3 rounded-lg"
              loading="lazy"
            />
          ) : (
            <VideoPlayer
              ref={videoRef}
              videoUrl={preview}
              poster={preview}
              loading="lazy"
            />
          ))}
      </div>

      {/* Post Stats */}
      <div className="flex justify-end items-center py-2 text-gray-500 dark:text-gray-300 text-sm">
        <span className="flex items-center mr-4 gap-1">
          <i
            className={
              reactions.likes ? "ri-thumb-up-fill" : "ri-thumb-up-line"
            }
          ></i>{" "}
          {reactions.likes ? 1 : 0}
        </span>
        <span className="flex items-center mr-4 gap-1">
          <i
            className={reactions.comments ? "ri-chat-1-fill" : "ri-chat-1-line"}
          ></i>{" "}
          {reactions.comments ? 1 : 0}
        </span>
        <span className="flex items-center gap-1">
          <i
            className={reactions.shares ? "ri-share-fill" : "ri-share-line"}
          ></i>{" "}
          {reactions.shares ? 1 : 0}
        </span>
      </div>

      {/* Post Actions */}
      <div className="py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between">
        {actionsButtons.map((action) => (
          <ReactionBtn
            key={action.title}
            reaction={action}
            className={"py-3"}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
