import imageCompression from "browser-image-compression";

// Helper function to convert Blob to File
const blobToFile = (blob, fileName) => {
  return new File([blob], fileName, {
    type: blob.type,
    lastModified: Date.now(),
  });
};

const compressImage = async (image) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedBlob = await imageCompression(image, options);

    // ✅ Convert Blob to File with original name and type
    const compressedFile = blobToFile(compressedBlob, image.name);

    console.log("Original:", image.size);
    console.log("Compressed:", compressedFile.size);

    return compressedFile; // Return a File object instead of Blob
  } catch (error) {
    console.error("Compression failed:", error);
    throw error; // Ensure you handle the error properly in your app
  }
};

export default compressImage;
