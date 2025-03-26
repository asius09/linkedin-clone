import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openNewPostCard } from "../../store/slices/contentSlice";
import { Link, useNavigate } from "react-router";
import UserAvatar from "../common/UserAvatar";
import ROUTES from "../../routes/routes";

const CreateNewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isNewPostCardOpen } = useSelector((state) => state.content);
  const { user: currentUser } = useSelector((state) => state.auth);

  const [file, setFile] = useState(null);
  const [eventState, setEventState] = useState({
    input: false,
    file: false,
    text: false,
  });

  const btns = [
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
    dispatch(openNewPostCard({ file: null }));
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
    dispatch(openNewPostCard({ file: URL.createObjectURL(selectedFile) }));
    navigate("/home/post/new");
  };

  useEffect(() => {
    !isNewPostCardOpen
      ? setEventState((prevState) => ({
          input: false,
          file: false,
          text: false,
        }))
      : null;
  }, [isNewPostCardOpen]);

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
          disabled={eventState.input}
          className="w-full"
        >
          <input
            disabled={eventState.input}
            type="text"
            placeholder="What do you want to talk about?"
            className="w-full border border-border dark:border-border-dark rounded-full py-3 px-4 bg-input-bg dark:bg-input-bg-dark resize-none focus:outline-none focus:ring-1 focus:ring-input-outline dark:focus:ring-input-outline-dark"
            rows="1"
          />
        </button>
      </div>

      <div className="flex justify-between items-center pt-1 border-t border-border dark:border-border-dark">
        {btns.map((btn) => renderBtn(btn))}
      </div>
    </div>
  );
};

export default CreateNewPost;
