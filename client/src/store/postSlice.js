/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

let oldList = [];
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
      // state.selectedCategory = payload;
      // if (payload !== 'all') {
      //   oldList = state.value;
      // }
      // const oldList = state.value;

      if (payload === 'all') {
        state.value = oldList;
      }
      // console.log(payload);
      // console.log('state', current(state));
      state.value = [current(...state.value)].filter((item) => {
        console.log('Item', item);
        return item.category === payload;
      });
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
        oldList = state.value;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
      });
  }
});
export const { setSelectedCategory } = PostSlice.actions;
export default PostSlice.reducer;
