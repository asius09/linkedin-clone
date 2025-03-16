import { useDispatch } from "react-redux";
import { openNewPostCard } from "../../features/postSlice";
import { Link } from "react-router";

const CreateNewPost = () => {
  const dispatch = useDispatch();
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
      link: "/article/new",
      type: "text",
    },
  ];

  const handleBtnClick = (type) => {
    if (type === "file") {
      // Logic for opening file input
      // You may want to implement file selection logic here
    }
    dispatch(openNewPostCard());
  };

  const handleMediaUpload = (event) => {
    // const file = event.target.files[0];
    dispatch(openNewPostCard());
    // Handle file upload logic here
  };

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
            type="file"
            className="hidden"
            onChange={(event) => handleMediaUpload(event)}
          />
        </label>
      );
    }
    return (
      <Link
        to={link}
        key={title}
        // onClick={() => handleBtnClick(type)}
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
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <form onClick={() => dispatch(openNewPostCard())} className="w-full">
          <textarea
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
