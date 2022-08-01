/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

let allList = [];
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
    setSelectedCategory(state, { payload }) {
      state.value = allList;

      if (payload != 'all') {
        const existingPosts = (state.value);
        const newPosts = [...existingPosts].filter((postObj) => postObj.category == payload);
        state.value = newPosts;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
        allList = state.value;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
      });
  }
});
export const { setSelectedCategory } = PostSlice.actions;
export default PostSlice.reducer;
