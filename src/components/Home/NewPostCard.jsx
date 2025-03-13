import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNewPostCard } from "../../features/postSlice.js";
import DropDown from "../DropDown.jsx";

const NewPostCard = () => {
  const { isNewPostCardOpen } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Anyone");
  const onSelect = (option) => {
    setSelectedOption(option);
  };
  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files);
    setMedia([...media, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, content, media, visibility });
    dispatch(closeNewPostCard());
  };

  const actionsBtns = [
    { label: "emoji", icon: "ri-emotion-line" },
    { label: "event", icon: "ri-calender-line" },
    { label: "more", icon: "ri-more-fill" },
  ];
  
  if (!isNewPostCardOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-xl w-full max-w-2xl p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User"
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
            <div>
              <h3 className="font-bold text-primary-text dark:text-primary-text-dark text-xl">
                John Doe
              </h3>
              <DropDown
                options={["Anyone", "Connections Only"]}
                selectedOption={selectedOption}
                onSelect={onSelect}
              />
            </div>
          </div>
          <button
            onClick={() => dispatch(closeNewPostCard())}
            className="text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-primary-text-dark mb-4"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-2">
          <textarea
            placeholder="What do you want to talk about?"
            className="w-full  text-primary-text dark:text-primary-text-dark resize-none outline-none p-2"
            rows="16"
            maxLength="500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <div>
              <button
                type="button"
                onClick={() => document.getElementById("media-upload").click()}
                className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <i className="ri-image-add-line mr-2 font-bold"></i> Add media
              </button>
              <input
                id="media-upload"
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleMediaUpload}
                className="hidden"
              />
            </div>

            <div className="text-right text-sm text-secondary-text dark:text-secondary-text-dark">
              {content.length}/500 characters
            </div>
          </div>
          {media.length > 0 && (
            <div className="mb-6 overflow-x-auto whitespace-nowrap">
              {media.map((file, index) => (
                <div key={index} className="inline-block mr-3 relative group">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Upload ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(file)}
                      className="w-24 h-24 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <button
                    onClick={() =>
                      setMedia(media.filter((_, i) => i !== index))
                    }
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1.5 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Remove media"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border dark:border-border-dark">
            <div className="flex space-x-2">
              {actionsBtns?.map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className="text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-primary-text-dark"
                >
                  <i className={`${btn.icon} text-xl`}></i>
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostCard;
