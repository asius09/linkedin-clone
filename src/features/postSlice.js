import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  isNewPostCardOpen: false,
  isPostDeleteModalOpen: {
    state: false,
    postId: null,
    fileId: null,
  },
  alertMessage: {
    id: null,
    state: null,
    message: null,
    type: null,
  },
  file: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    openNewPostCard: (state, action) => {
      state.isNewPostCardOpen = true;
      state.file = action.payload.file;
    },
    closeNewPostCard: (state) => {
      state.isNewPostCardOpen = false;
      state.file = null;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setIsPostDeleteModalOpen: (state, action) => {
      state.isPostDeleteModalOpen = {
        ...state.isPostDeleteModalOpen,
        ...action.payload,
      };
    },
  },
});

export const {
  addPost,
  openNewPostCard,
  closeNewPostCard,
  setAlertMessage,
  setIsPostDeleteModalOpen,
} = postSlice.actions;
export default postSlice;
