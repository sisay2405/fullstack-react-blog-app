import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    posts: postReducer,
    categories: categoryReducer
  },
});
