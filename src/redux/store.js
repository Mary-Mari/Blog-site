import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
    },
});


export default store;