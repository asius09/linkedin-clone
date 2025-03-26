import { forwardRef } from "react";

const MediaUploader = forwardRef(
  (
    {
      preview,
      handleFileChange,
      removeFile,
      buttonClassName = "",
      inputClassName = "",
      buttonLabel = "Upload Media",
      removeButtonIcon = "ri-close-line",
      icon = "ri-image-add-line",
      uploadState = false,
      type = "image",
    },
    ref
  ) => {
    const triggerFileInput = () => {
      document.getElementById("media-upload").click();
    };

    return (
      <div className="w-full">
        {uploadState && (
          <div className="flex items-center justify-center gap-2 h-52">
            <i className="ri-loader-2-fill text-2xl animate-spin"></i>
            <span className="text-primary-text dark:text-primary-text-dark">
              Uploading...
            </span>
          </div>
        )}
        {!uploadState && (
          <>
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
              <div className="relative">
                <button
                  type="button"
                  onClick={removeFile}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-red-500 dark:bg-red-800 transition absolute top-2 right-2 focus:outline-none"
                  aria-label="Remove uploaded media"
                >
                  <i
                    className={`${removeButtonIcon} text-2xl`}
                    aria-hidden="true"
                  ></i>
                </button>
                <div className="w-full max-h-72 h-auto overflow-y-scroll scrollable rounded-lg mt-2 ">
                  <div
                    className={`w-full max-h-full overflow-hidden ${
                      type === "image"
                        ? ""
                        : "bg-input-bg dark:bg-input-bg-dark"
                    }`}
                  >
                    {preview && type === "image" ? (
                      <img
                        src={preview}
                        alt="Uploaded preview"
                        className="w-full max-h-full object-cover"
                      />
                    ) : (
                      <div className="w-44 max-h-44 ">
                        <video
                          src={preview}
                          poster={"../../defaultVideo.png"}
                          className="aspect-video object-cover w-full max-h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
);

export default MediaUploader;
