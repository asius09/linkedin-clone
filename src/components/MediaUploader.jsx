import { useState, forwardRef } from "react";

const MediaUploader = forwardRef(
  (
    {
      preview,
      setPreview,
      setFile,
      handleFileChange,
      removeFile,
      buttonClassName = "",
      inputClassName = "",
      buttonLabel = "Upload Media",
      removeButtonIcon = "ri-close-line",
      icon = "ri-image-add-line",
      uploadState = false, // New prop for upload state
      setUploadState, // Function to set the upload state
    },
    ref
  ) => {
    const triggerFileInput = () => {
      document.getElementById("media-upload").click();
    };
    return (
      <div className="w-full">
        {!preview ? (
          <>
            <button
              type="button"
              onClick={triggerFileInput}
              className={buttonClassName}
            >
              <i className={`${icon} mr-2 text-xl`}></i> {buttonLabel}
            </button>
            <input
              id="media-upload"
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className={inputClassName}
              ref={ref}
            />
          </>
        ) : (
          <div className="w-full h-64 overflow-y-scroll rounded-lg mt-4 relative">
            <button
              type="button"
              onClick={removeFile}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-red-500 dark:bg-red-800 transition absolute top-2 right-2"
              aria-label="Remove uploaded media"
            >
              <i
                className={`${removeButtonIcon} text-2xl`}
                aria-hidden="true"
              ></i>
            </button>
            <img
              src={preview}
              alt="Uploaded preview"
              className="w-full max-h-full object-cover"
            />
          </div>
        )}
      </div>
    );
  }
);

export default MediaUploader;
