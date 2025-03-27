import { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setAlertMessage } from "../../store/slices/alertSlice.js";
import UserAvatar from "../common/UserAvatar.jsx";
import DropDown from "../form/DropDown.jsx";
import MediaUploader from "../mediaHandlers/MediaUploader.jsx";
import Buttons from "../ui/Buttons.jsx";
import { useNavigate } from "react-router";
import contentService from "../../services/contentService.js";
import fileService from "../../services/fileService.js";
import { compressImage } from "../../utils/index.js";
import { closeAllFeatureFlags } from "../../store/slices/featureFlagsSlice.js";

const PostComposer = ({ editPost }) => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      user: "",
      content: "",
      userFile: null,
      type: "post",
      visibility: "Anyone",
      status: true,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const actionsBtns = [
    { label: "emoji", icon: "ri-emotion-line" },
    { label: "event", icon: "ri-calender-line" },
    { label: "more", icon: "ri-more-fill" },
  ];
  const { postComposer } = useSelector(
    (state) => state.featureFlags.featureFlags
  );
  const { user: currentUser } = useSelector((state) => state.auth);

  const [chrLimit] = useState(255);
  const content = watch("content");
  const charCount = content.length;

  const onSelect = (option) => setValue("visibility", option);

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
    if (!file || fileType === "") return;
    setUploading(true);
    try {
      let compressedFile;
      if (fileType === "image") {
        compressedFile = await compressImage(file);
      } else if (fileType === "video") {
        compressedFile = file;
      }

      const uploadedFile = await fileService.uploadFile(compressedFile);
      if (uploadedFile) {
        setValue("userFile", uploadedFile.$id);
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
        fileId: watch("userFile"),
      });
      if (isRemove) {
        setFile(null);
        setPreview(null);
        setUploading(false);
        setValue("userFile", null);
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

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        user: JSON.stringify({
          $id: currentUser.$id,
          name: currentUser.name,
          avatar: currentUser?.avater,
        }),
      };
      const newContent = await contentService.createContent(formData);
      if (newContent) {
        dispatch(
          setAlertMessage({
            id: "postCreated",
            state: true,
            message: "Post created successfully",
            type: "success",
          })
        );
        dispatch(closeAllFeatureFlags());
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

  if (!postComposer) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
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
                selectedOption={watch("visibility")}
                onSelect={onSelect}
              />
            </div>
          </div>
          <button
            onClick={() => dispatch(closeAllFeatureFlags())}
            className="text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-primary-text-dark mb-4"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="What do you want to talk about?"
                className="w-full h-fit max-h-52 text-primary-text dark:text-primary-text-dark resize-none outline-none p-2 text-xl"
                rows={16}
                maxLength={chrLimit}
              />
            )}
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
    </div>
  );
};

export default PostComposer;
