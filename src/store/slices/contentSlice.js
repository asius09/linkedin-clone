import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const loadState = () => {
  try {
    const contentState = localStorage.getItem("contentState");
    if (contentState === null) {
      return {
        posts: [],
        articles: [],
        contentLoading: false,
        error: null,
        deleteContent: {
          type: null,
          contentId: null,
          fileId: null,
        },
      };
    }
    return JSON.parse(contentState);
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return {
      posts: [],
      articles: [],
      contentLoading: false,
      error: null,
      deleteContent: {
        type: null,
        postId: null,
        fileId: null,
      },
    };
  }
};

const initialState = loadState();

// Save state to localStorage
const saveState = (state) => {
  try {
    const contentState = JSON.stringify(state);
    localStorage.setItem("contentState", contentState);
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

    setDeleteContent: (state, action) => {
      state.deleteContent = {
        ...state.deleteContent,
        ...action.payload,
      };
      saveState(state);
    },
  },
});

export const { addPosts, addArticles, setContentLoading, setDeleteContent } =
  contentSlice.actions;
export default contentSlice;
