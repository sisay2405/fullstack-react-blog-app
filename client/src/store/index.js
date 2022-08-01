/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import categoryReducer from './categorySlice';
import addPostsReducer from './addPostSlice';

export default configureStore({
  reducer: {
    posts: postReducer,
    categories: categoryReducer,
    addposts: addPostsReducer
  },
});
