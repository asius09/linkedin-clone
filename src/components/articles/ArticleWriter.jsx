import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlertMessage } from "../../store/slices/alertSlice.js";
import { DropDown } from "../form";
import { TextEditor } from "../editor";
import { UserAvatar } from "../common";
import { compressImage } from "../../utils";
import { ImageDropZone } from "../mediaHandlers";
import fileService from "../../services/fileService";
import contentService from "../../services/contentService";
import { useNavigate } from "react-router";
import ROUTES from "../../routes/routes";

const ArticleWriter = () => {
  const dropDownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  const [selectedOption, setSelectedOption] = useState("Individual Article");
  const [featureImage, setFeatureImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [featureImageUploading, setFeatureImageUploading] = useState(false);

  const [article, setArticle] = useState({
    title: "",
    content: "<p></p>",
    userFile: null,
    user: JSON.stringify({
      $id: currentUser.$id,
      name: currentUser?.name,
      avatar: currentUser?.avatar,
    }),
    type: "article",
    visibility: "anyone",
    status: true,
  });

  const removeFeatureImage = async () => {
    try {
      if (article.userFile) {
        await fileService.deleteFile({ fileId: article.userFile });
        setFeatureImage(null);
        setPreview(null);
        setArticle((prev) => ({ ...prev, userFile: null }));
        dispatch(
          setAlertMessage({
            id: "featureImageRemoved",
            state: true,
            message: "Feature image removed successfully",
            type: "success",
          })
        );
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "featureImageRemoveError",
          state: true,
          message: "Failed to remove feature image",
          type: "error",
        })
      );
      console.error("Error removing feature image:", error);
    }
  };

  const handleFeatureImageUpload = async () => {
    if (!featureImage) return;
    setFeatureImageUploading(true);
    try {
      const compressedImage = await compressImage(featureImage);
      const uploadedImage = await fileService.uploadFile(compressedImage);
      if (uploadedImage) {
        dispatch(
          setAlertMessage({
            id: "articleFeatureImageUpload",
            state: true,
            message: "Feature image uploaded successfully",
            type: "success",
          })
        );
        setArticle((prev) => ({ ...prev, userFile: uploadedImage.$id }));
        const previewUrl = fileService.getFilePreview({
          fileId: uploadedImage.$id,
        });
        setPreview(previewUrl);
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "articleFeatureImagesUpload",
          state: true,
          message: "Failed to upload feature image",
          type: "error",
        })
      );
    } finally {
      setFeatureImageUploading(false);
    }
  };

  useEffect(() => {
    handleFeatureImageUpload();
  }, [featureImage]);

  const validateArticleInputs = () => {
    if (!article.title?.trim()) return "Title is required";
    if (!article.content?.trim() || article.content === "<p></p>")
      return "Content is required";
    if (article.content.length < 100)
      return "Content must be at least 100 characters";
    if (!article.userFile) return "Feature image is required";
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateArticleInputs();
    if (validationError) {
      dispatch(
        setAlertMessage({
          id: "validationError",
          state: true,
          message: validationError,
          type: "error",
        })
      );
      return;
    }

    try {
      const uploadedArticle = await contentService.createContent(article);
      if (uploadedArticle) {
        dispatch(
          setAlertMessage({
            id: "article-uploaded",
            state: true,
            message: "Article Uploaded Successfully",
            type: "success",
          })
        );
        navigate(ROUTES.ARTICLEFEED);
      }
    } catch (error) {
      dispatch(
        setAlertMessage({
          id: "articleUploadError",
          state: true,
          message: "Failed to upload article",
          type: "error",
        })
      );
      console.error("Failed to upload article:", error);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen p-6 bg-secondary-bg dark:bg-secondary-bg-dark">
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow mt-4">
        <header className="w-full flex justify-between items-center mb-4">
          <div className="flex items-center">
            <UserAvatar
              className="mr-3"
              size={60}
              iconSize={2}
              imgURL={currentUser?.avatar || ""}
            />
            <div className="flex flex-col">
              <h3 className="font-bold text-primary-text dark:text-primary-text-dark text-xl">
                {currentUser.name}
              </h3>
              <div className="w-full flex items-center justify-between gap-2 mt-1">
                <p className="text-primary text-nowrap text-sm font-semibold">
                  Publish as
                </p>
                <DropDown
                  options={["Individual Article", "Company Article"]}
                  selectedOption={selectedOption}
                  onSelect={setSelectedOption}
                  ref={dropDownRef}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-primary font-semibold text-primary-text dark:text-primary-text-dark px-4 py-2 rounded-full hover:bg-primary-dark transition"
            onClick={handleSubmit}
          >
            <span>Publish</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </header>

        <ImageDropZone
          setImage={setFeatureImage}
          removeImage={removeFeatureImage}
          className="mb-4"
          preview={preview}
          loading={featureImageUploading}
        />

        <label
          htmlFor="title"
          className="text-secondary-text dark:text-secondary-text-dark text-sm font-medium"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Article Title"
          value={article.title}
          onChange={(e) =>
            setArticle((prev) => ({ ...prev, title: e.target.value }))
          }
          className="w-full mb-4 py-3 text-2xl outline-0 font-semibold text-primary-text dark:text-primary-text-dark"
        />

        <label
          htmlFor="content"
          className="text-secondary-text dark:text-secondary-text-dark text-sm font-medium mb-1"
        >
          Content
        </label>
        <TextEditor
          value={article.content}
          onChange={(data) =>
            setArticle((prev) => ({ ...prev, content: data }))
          }
        />
      </form>
    </div>
  );
};

export default ArticleWriter;
