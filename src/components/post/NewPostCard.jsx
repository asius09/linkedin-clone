import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNewPostCard } from "../../store/slices/contentSlice.js";
import { setAlertMessage } from "../../store/slices/alertSlice.js";
import UserAvatar from "../common/UserAvatar.jsx";
import DropDown from "../form/DropDown.jsx";
import MediaUploader from "../mediaHandlers/MediaUploader.jsx";
import Buttons from "../ui/Buttons.jsx";
import { useNavigate } from "react-router";
import contentService from "../../services/contentService.js";
import fileService from "../../services/fileService.js";
import { compressImage } from "../../utils";

const NewPostCard = () => {
  const actionsBtns = [
    { label: "emoji", icon: "ri-emotion-line" },
    { label: "event", icon: "ri-calender-line" },
    { label: "more", icon: "ri-more-fill" },
  ];

  const { isNewPostCardOpen } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chrLimit] = useState(255);
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  const dropdownRef = useRef(null);
  const onSelect = (option) => setSelectedOption(option);
  const [selectedOption, setSelectedOption] = useState("Anyone");

  //Form Data for the new post which takes [user : [$id, name, avatar] , content: string, userFile: $id, type: "post", visibility : "", status: true]
  const [formData, setFormData] = useState({
    user: JSON.stringify({
      $id: currentUser.$id,
      name: currentUser.name,
      avatar: currentUser?.avater,
    }),
    title: "",
    content: "",
    userFile: null,
    type: "post",
    visibility: selectedOption,
    status: true,
  });

  //file states...
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [type, setType] = useState("");

  //checking file types where it's images or video
  const checkFileType = () => {
    if (file && file.type.startsWith("image/")) {
      return "image";
    } else if (file && file.type.startsWith("video/")) {
      return "video";
    } else {
      return "";
    }
  };

  //hanlding Upload... (check file type compress it upload it then alert the result)
  const handleUpload = async () => {
    const fileType = checkFileType();
    setType(fileType);
    console.log(type);
    if (!file || fileType === "") return;
    setUploading(true);
    console.log("file:", file);
    try {
      let compressedFile;
      if (fileType === "image") {
        compressedFile = await compressImage(file);
      } else if (fileType === "video") {
        compressedFile = file;
      }
      console.log("compressedFile:", compressedFile);

      const uploadedFile = await fileService.uploadFile(compressedFile);
      if (uploadedFile) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          userFile: uploadedFile.$id,
        }));
        dispatch(
          setAlertMessage({
            id: "fileUploaded",
            state: true,
            message: "File uploaded successfully",
            type: "success",
          })
        );
        const preview = fileService.getFilePreview({
          fileId: uploadedFile.$id,
        });
        setPreview(preview);
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "fileUploadFailed",
          state: true,
          message: "Failed to upload file",
          type: "error",
        })
      );
    } finally {
      setUploading(false);
    }
  };

  //hanlding file changes...
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  //removing file (remove file from the selection)
  const removeFile = async () => {
    try {
      const isRemove = await fileService.deleteFile({
        fileId: formData.userFile,
      });
      if (isRemove) {
        setFile(null);
        setPreview(null);
        setUploading(false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          userFile: null,
        }));
        dispatch(
          setAlertMessage({
            id: "fileRemoved",
            state: true,
            message: "File removed successfully",
            type: "success",
          })
        );
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "fileRemoveFailed",
          state: true,
          message: "Failed to remove file",
          type: "error",
        })
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newContent = await contentService.createContent({ ...formData });
      if (newContent) {
        dispatch(
          setAlertMessage({
            id: "postCreated",
            state: true,
            message: "Post created successfully",
            type: "success",
          })
        );
        dispatch(closeNewPostCard());
        navigate("/home");
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "postFailed",
          state: false,
          message: "Failed to create post",
          type: "error",
        })
      );
    }
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  useEffect(() => {
    setCharCount(formData.content.length);
  }, [formData.content]);

  if (!isNewPostCardOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <i className="ri-loader-2-fill text-2xl animate-spin"></i>
        </div>
      ) : (
        <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-xl w-full max-w-2xl p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <UserAvatar
                size={48}
                iconSize={2}
                imgURL={currentUser?.imgUrl || ""}
              />
              <div>
                <h3 className="font-bold text-primary-text dark:text-primary-text-dark text-xl">
                  {currentUser?.name || "No User Found"}
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
              className="w-full h-fit max-h-52 text-primary-text dark:text-primary-text-dark resize-none outline-none p-2 text-xl"
              rows={16}
              maxLength={chrLimit}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
            <MediaUploader
              preview={preview}
              uploadState={uploading}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              inputClassName="hidden"
              buttonClassName="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
              buttonLabel="Add media"
              icon="ri-image-add-line"
              type={type}
            />

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border dark:border-border-dark">
              {/* Actions Buttons */}
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
              {/* Actions Buttons End */}

              {/* Post Button */}
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
                <Buttons
                  variant="filled"
                  type="submit"
                  miniWidth={true}
                  className="px-4 py-2 font-semibold"
                >
                  Post
                </Buttons>
              </div>
              {/* Post Button End */}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewPostCard;
