/* global PostsState, value, loading, error */
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './index';
import { PostResult } from '../types/types';

const webURL = 'https://sef-bloq-app.herokuapp.com/';
// Define a type for the slice state
interface PostsState {
  value:PostResult[];
  loading: boolean;
  error: boolean;
}

// Define the initial state using that type
const initialState: PostsState = {
  value: [],
  loading: false,
  error: false
};

// get posts by id (works)
export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (id: string) => {
    const res = await fetch(
      `/getOne/${id}`
    );
    return res.json();
  }
);

// Getting all posts (works)
export const getPosts = createAsyncThunk(
  'post/getPosts',
  async () => {
    const { data: apiResults } = await axios.get(`${webURL}/api/getAllPosts`);
    return apiResults;
  }
);

// need another route or do filtering function in redux
export const setSelectedCategory = createAsyncThunk(
  'post/filterPosts',
  async (category: string) => {
    const params = (category !== 'all') ? `category/${category}` : 'getAllPosts';
    const { data: apiResults } = await axios.get(`${webURL}/api/${params}`);
    return apiResults;
  }
);

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<PostResult[]>) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
      })
      .addCase(setSelectedCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(setSelectedCategory.fulfilled, (state, action: PayloadAction<PostResult[]>) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(setSelectedCategory.rejected, (state) => {
        state.error = true;
      });
  }
});
// Other code such as selectors can use the imported `RootState` type
export const postData = (state: RootState) => state.posts.value;
export default PostSlice.reducer;
