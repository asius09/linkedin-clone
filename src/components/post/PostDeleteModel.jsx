import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPostDeleteModalOpen } from "../../store/slices/contentSlice";
import setAlertMessage from "../../store/slices/alertSlice";
import contentService from "../../services/contentService";
import fileService from "../../services/fileService";
import { useNavigate } from "react-router";

const PostDeleteModel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPostDeleteModalOpen } = useSelector((state) => state.content);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!isPostDeleteModalOpen.state) return;

    setLoading(true);

    try {
      if (isPostDeleteModalOpen.fileId) {
        const fileResponse = await fileService.deleteFile({
          fileId: isPostDeleteModalOpen.fileId,
        });
        const response = await contentService.deleteContent({
          contentId: isPostDeleteModalOpen.postId,
        });

        if (fileResponse && response) {
          dispatch(
            setAlertMessage({
              id: "post-deleted",
              state: true,
              message: "Post deleted successfully",
              type: "success",
            })
          );
        }
      } else {
        const response = await contentService.deleteContent({
          contentId: isPostDeleteModalOpen.postId,
        });

        if (response) {
          dispatch(
            setAlertMessage({
              id: "post-deleted",
              state: true,
              message: "Post deleted successfully",
              type: "success",
            })
          );
        }
      }
    } catch (errors) {
      if (Array.isArray(errors)) {
        errors.forEach((error) =>
          dispatch(
            setAlertMessage({
              id: "post-deleted",
              state: true,
              message: error.message,
              type: "error",
            })
          )
        );
      } else {
        dispatch(
          setAlertMessage({
            id: "post-deleted",
            state: true,
            message: errors.message,
            type: "error",
          })
        );
      }
    } finally {
      setLoading(false);
      dispatch(
        setIsPostDeleteModalOpen({
          state: false,
          fileId: null,
          postId: null,
        })
      );
    }
    navigate("/home", { replace: true });
  };

  const handleCancel = () => {
    dispatch(
      setIsPostDeleteModalOpen({
        state: false,
        fileId: null,
        postId: null,
      })
    );
  };

  return isPostDeleteModalOpen.state ? (
    <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center w-screen h-screen">
      <div className="h-52 bg-secondary-bg dark:bg-secondary-bg-dark rounded-md p-4 max-w-96 w-full flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <i className="ri-loader-line animate-spin text-3xl text-scarlet-500"></i>
            <span>Deleting Post...</span>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Delete Post?</h2>
            <p className="text-sm mb-8 text-center">
              Are you sure you want to delete this post? This action is
              permanent and cannot be undone.
            </p>
            <div className="w-full flex items-center justify-evenly">
              <button
                className="text-scarlet-500 flex items-center gap-2"
                onClick={handleDelete}
              >
                <i className="ri-error-warning-line text-3xl"></i>
                <span>Yes, delete</span>
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default PostDeleteModel;
