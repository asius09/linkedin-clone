import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeatureFlags } from "../../store/slices/featureFlagsSlice";
import { Link, useNavigate } from "react-router";
import { UserAvatar } from "../common";
import ROUTES from "../../routes/routes";

const ContentComposePanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);
  const { postComposer } = useSelector(
    (state) => state.featureFlags.featureFlags
  );
  const [file, setFile] = useState(null);

  const [eventState, setEventState] = useState({
    input: false,
    file: false,
    text: false,
  });

  const composerBtns = [
    {
      title: "Photo",
      icon: "ri-image-line",
      iconColor: "text-blue-500",
      type: "file",
    },
    {
      title: "Video",
      icon: "ri-video-line",
      iconColor: "text-green-500",
      type: "file",
    },
    {
      title: "Event",
      icon: "ri-calendar-line",
      iconColor: "text-amber-500",
      type: "text",
    },
    {
      title: "Article",
      icon: "ri-article-line",
      iconColor: "text-red-500",
      link: ROUTES.ARTICLE,
      type: "text",
    },
  ];

  const handleBtnClick = (type) => {
    if (type === "file") return;
    dispatch(toggleFeatureFlags({ flag: "postComposer" }));
    navigate("/home/post/new");
    setEventState({
      input: true,
      file: true,
      text: true,
    });
  };

  const handleMediaChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    dispatch(toggleFeatureFlags("postComposer"));
    navigate("/home/post/new");
  };

  useEffect(() => {
    !postComposer
      ? setEventState((prevState) => ({
          input: false,
          file: false,
          text: false,
        }))
      : null;
  }, [postComposer]);

  const renderBtn = ({ title, icon, iconColor, type, link }) => {
    if (type === "file") {
      return (
        <label
          key={title}
          className="w-full h-full flex items-center justify-center py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors cursor-pointer"
        >
          <i className={`${icon} ${iconColor} mr-2`}></i>
          <span>{title}</span>
          <input
            disabled={eventState[type]}
            type="file"
            className="hidden"
            onChange={(event) => handleMediaChange(event)}
          />
        </label>
      );
    }
    return (
      <Link
        to={link}
        key={title}
        disabled={eventState[type]}
        className="w-full h-full flex items-center justify-center py-3
        hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors
        cursor-pointer"
      >
        <i className={`${icon} ${iconColor} mr-2`}></i>
        <span>{title}</span>
      </Link>
    );
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm px-4 pt-4 pb-1 mb-4">
      <div className="flex items-center justify-center mb-4 gap-3">
        <UserAvatar size={48} iconSize={2} imgURL={currentUser?.avatar || ""} />
        <button
          onClick={() => handleBtnClick("text")}
          className="w-full text-left border border-border dark:border-border-dark rounded-full py-3 px-4 bg-input-bg dark:bg-input-bg-dark hover:bg-seconday-bg-hover dark:hover:bg-secondary-bg-hover-dark transition-colors cursor-pointer"
        >
          <span className="text-secondary-text dark:text-secondary-text-dark">
            What do you want to talk about?
          </span>
        </button>
      </div>

      <div className="flex justify-between items-center pt-1 border-t border-border dark:border-border-dark">
        {composerBtns.map((btn) => renderBtn(btn))}
      </div>
    </div>
  );
};

export default ContentComposePanel;
