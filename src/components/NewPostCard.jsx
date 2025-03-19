import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNewPostCard } from "../features/postSlice.js";
import DropDown from "./DropDown.jsx";
import MediaUploader from "./MediaUploader.jsx";
import Buttons from "./Buttons.jsx";
import authService from "../services/authService.js";
import { useNavigate } from "react-router";
import contentService from "../services/contentService.js";
import { setIsPostCreated } from "../features/postSlice.js";

const NewPostCard = () => {
  const [user, setUser] = useState(null);
  const { isNewPostCardOpen } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Anyone");
  const [chrLimit] = useState(255);
  const [charCount, setCharCount] = useState(0);
  const [media, setMedia] = useState([]);
  const [formData, setFormData] = useState({
    user: {},
    title: "",
    content: "",
    userFile: null,
    type: "post",
    visibility: selectedOption,
    status: false,
  });
  const navigate = useNavigate();
  const onSelect = (option) => setSelectedOption(option);
  const dropdownRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      if (setUploadState) setUploadState(true);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    if (setUploadState) setUploadState(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newContent = await contentService.createContent({ ...formData });
      if (newContent) {
        console.log("new content : ", newContent);
        dispatch(
          setIsPostCreated({
            state: true,
            message: "Post created successfully",
            type: "success",
          })
        );
        dispatch(closeNewPostCard());
        navigate("/home");
      }
    } catch (error) {
      console.error("Error creating content:", error.message);
      dispatch(
        setIsPostCreated({
          state: false,
          message: "Failed to create post",
          type: "error",
        })
      );
    }
  };

  const actionsBtns = [
    { label: "emoji", icon: "ri-emotion-line" },
    { label: "event", icon: "ri-calender-line" },
    { label: "more", icon: "ri-more-fill" },
  ];

  useEffect(() => {
    setCharCount(formData.content.length);
  }, [formData.content]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        setFormData((prevFormData) => ({
          ...prevFormData,
          user: JSON.stringify(userData) || "No User Found",
          status: userData?.status || "",
        }));
      } catch (error) {
        console.error("Failed to get current user:", error);
      }
    };
    getUser();
  }, []);

  if (!isNewPostCardOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-xl w-full max-w-2xl p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="User"
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
            <div>
              <h3 className="font-bold text-primary-text dark:text-primary-text-dark text-xl">
                {user?.name || "No User Found"}
              </h3>
              <DropDown
                ref={dropdownRef}
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
            className="w-full h-fit max-h-64 text-primary-text dark:text-primary-text-dark resize-none outline-none p-2 text-xl"
            rows={media.length > 0 ? 5 : 17}
            maxLength={chrLimit}
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
          <MediaUploader
            preview={preview}
            setPreview={setPreview}
            setFile={setFile}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            inputClassName="hidden"
            buttonClassName="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
            buttonLabel="Add media"
            icon="ri-image-add-line"
          />

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
              {actionsBtns.map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className="text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-primary-text-dark"
                >
                  <i className={`${btn.icon} text-xl`}></i>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`text-right text-sm ${
                  charCount > chrLimit
                    ? "text-red-600 dark:text-red-400"
                    : "text-secondary-text dark:text-secondary-text-dark"
                }`}
              >
                {charCount}/{chrLimit}
              </div>
              <Buttons variant="filled" type="submit" miniWidth={true}>
                Post
              </Buttons>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostCard;
