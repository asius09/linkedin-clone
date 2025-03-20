import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  isNewPostCardOpen: false,
  isPostCreated: {
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
    setIsPostCreated: (state, action) => {
      state.isPostCreated = action.payload;
    },
  },
});

export const { addPost, openNewPostCard, closeNewPostCard, setIsPostCreated } =
  postSlice.actions;
export default postSlice;
