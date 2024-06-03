// src/slices/postSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    // Example of a post object structure
    // { id: '1', title: 'First Post', content: 'This is the content of the first post.' }
  ]
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          }
        };
      }
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter(post => post.id !== id);
    }
  }
});

export const { addPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
