import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme } from "./themeSlice";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  isNewPostCardOpen: false,
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
  },
});

export const { addPost, openNewPostCard, closeNewPostCard } = postSlice.actions;
export default postSlice;
