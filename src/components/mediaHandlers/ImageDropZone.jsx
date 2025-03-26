import React, { useCallback, useState } from "react";
import { compressImage } from "../../utils";
import { useDropzone } from "react-dropzone";

const ImageDropZone = ({
  setImage,
  removeImage,
  className = "",
  preview,
  loading,
}) => {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0]; // Get the first file
      const compressedImage = await compressImage(file);

      setImage(compressedImage);
    },
    [setImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
    maxFiles: 1, // Limit the number of files
  });

  return (
    <div
      className={`bg-input-bg dark:bg-input-bg-dark rounded-lg ${className} ${
        preview ? "" : "p-4"
      }`}
    >
      {loading ? (
        <div className="w-full h-48 flex items-center justify-center text-primary-text dark:text-primary-text-dark">
          <i className="ri-loader-2-fill animate-spin text-2xl" />
          <p className="text-xl">Uploading Feature Image...</p>
        </div>
      ) : !preview ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-primary-text dark:text-primary-text-dark text-center">
            Drag & Drop Feature Image
          </h1>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-primary bg-primary-hover"
                : "border-text-secondary-text dark:border-secondary-text-dark"
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-secondary-text dark:text-secondary-text-dark">
              {isDragActive
                ? "Drop the feature image here..."
                : "Drag and drop feature image here, or click to select files"}
            </p>
          </div>
        </>
      ) : (
        <div className="relative group w-full h-[400px] max-w-[1200px] mx-auto rounded-lg overflow-hidden">
          <img
            src={preview}
            alt="feature image"
            className="w-full h-full object-cover"
          />

          {/* Remove Button */}
          <button
            className="w-10 h-10 absolute top-4 right-4 bg-scarlet-500 text-white p-2 rounded-full hover:bg-scarlet-500/80 transition"
            onClick={async () => {
              await removeImage();
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageDropZone;
