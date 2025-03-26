import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("postState");
    if (serializedState === null) {
      return {
        posts: [],
        articles: [],
        contentLoading: false,
        error: null,
        isNewPostCardOpen: false,
        isPostDeleteModalOpen: {
          state: false,
          postId: null,
          fileId: null,
        },
        file: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return {
      posts: [],
      articles: [],
      contentLoading: false,
      error: null,
      isNewPostCardOpen: false,
      isPostDeleteModalOpen: {
        state: false,
        postId: null,
        fileId: null,
      },
      file: null,
    };
  }
};

const initialState = loadState();

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("postState", serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage:", err);
  }
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.posts = [...action.payload];
        saveState(state);
      }
    },
    addArticles: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.articles = [...action.payload];
        saveState(state);
      }
    },
    setContentLoading: (state, action) => {
      state.contentLoading = action.payload;
      saveState(state);
    },
    openNewPostCard: (state, action) => {
      state.isNewPostCardOpen = true;
      state.file = action.payload.file;
      saveState(state);
    },
    closeNewPostCard: (state) => {
      state.isNewPostCardOpen = false;
      state.file = null;
      saveState(state);
    },
    setIsPostDeleteModalOpen: (state, action) => {
      state.isPostDeleteModalOpen = {
        ...state.isPostDeleteModalOpen,
        ...action.payload,
      };
      saveState(state);
    },
  },
});

export const {
  addPosts,
  addArticles,
  openNewPostCard,
  closeNewPostCard,
  setIsPostDeleteModalOpen,
  setContentLoading,
} = contentSlice.actions;
export default contentSlice;
