/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* global RootState, ReturnType, getState, AppDispatch, dispatch */
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import categoryReducer from './categorySlice';
import addPostsReducer from './addPostSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    categories: categoryReducer,
    addposts: addPostsReducer,
    user: userReducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
