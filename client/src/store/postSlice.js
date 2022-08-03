/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (id) => {
    const res = await fetch(
      `http://localhost:3001/posts/${id}`
    );
    return res.json();
  }
);
export const getPosts = createAsyncThunk(
  'post/getPosts',
  async () => {
    const { data: apiResults } = await axios.get('/posts');
    return apiResults;
  }
);

export const setSelectedCategory = createAsyncThunk(
  'post/filterPosts',
  async (category) => {
    const params = category !== 'all' ? `?category=${category}` : '';
    const { data: apiResults } = await axios.get(`/posts/${params}`);
    return apiResults;
  }
);

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
    loading: false,
    error: false,
    details: {},
  },

  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
      })
      .addCase(setSelectedCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(setSelectedCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
      })
      .addCase(setSelectedCategory.rejected, (state) => {
        state.error = true;
      });
  }
});
export default PostSlice.reducer;
