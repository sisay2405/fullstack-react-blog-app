/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

// get posts by id (works)
export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (id) => {
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
    const { data: apiResults } = await axios.get('http://localhost:3001/api/getAllPosts');
    console.log('RESULTS:', apiResults);
    return apiResults;
  }
);

// need another route or do filtering function in redux
export const setSelectedCategory = createAsyncThunk(
  'post/filterPosts',
  async (category) => {
    const params = category !== 'all' ? `category/${category}` : 'getAllPosts';
    const { data: apiResults } = await axios.get(`http://localhost:3001/api/${params}`);
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
