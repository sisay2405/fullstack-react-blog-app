/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* global RootState, ReturnType, getState, AppDispatch, dispatch */
import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import categoryReducer from './categorySlice';
import addPostsReducer from './addPostSlice';

// *********** added for testing funtionality ******************** //
const rootReducer = combineReducers({
  posts: postReducer
})


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
// ************************************************************** //

export const store = configureStore({
  reducer: {
    posts: postReducer,
    categories: categoryReducer,
    addposts: addPostsReducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// ************added for testing funtionality ***************** //
export type AppStore = ReturnType<typeof setupStore>
// ************************************************************ //