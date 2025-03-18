import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme } from "./themeSlice";
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
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    openNewPostCard: (state) => {
      state.isNewPostCardOpen = true;
    },
    closeNewPostCard: (state) => {
      state.isNewPostCardOpen = false;
    },
    setIsPostCreated: (state, action) => {
      state.isPostCreated = action.payload;
    },
  },
});

export const { addPost, openNewPostCard, closeNewPostCard, setIsPostCreated } = postSlice.actions;
export default postSlice;
