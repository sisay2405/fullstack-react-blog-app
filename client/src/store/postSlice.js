/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async () => {
    const { data: apiResults } = await axios.get('/posts');
    console.log('API RESULTS:', apiResults);
    return apiResults;
  }
);

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
    loading: false,
    error: false,
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
      });
  }
});

export default PostSlice.reducer;
