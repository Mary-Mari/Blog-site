import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Загрузка постов из localStorage
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload); // добавление нового поста в массив
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments = post.comments ? [...post.comments, comment] : [comment];
        localStorage.setItem("posts", JSON.stringify(state.posts)); // обновление localStorage
      }
    },
    deleteComment: (state, action) => {
      const { postId, commentId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments = post.comments.filter((comment) => comment.id !== commentId);
        localStorage.setItem("posts", JSON.stringify(state.posts)); // обновление localStorage
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts)); // обновление localStorage
    },

    
  },
});

export const { addPost, addComment, deleteComment, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
