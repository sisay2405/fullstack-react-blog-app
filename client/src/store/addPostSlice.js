/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addposts = createAsyncThunk(
  'addposts',
  async ({ title, text, category }) => {
    try {
      const posts = await axios.post('http://localhost:3001/posts', {
        title,
        text,
        category,
      });
      return posts.data;
    } catch (err) {
      console.log(`Erorr!:${err}`);
    }
  }
);

export const addPostSlice = createSlice({
  name: 'addposts',
  initialState: {
    title: '',
    text: '',
    category: '',
    reload: false,
    loading: false,
    error: false,
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(addposts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addposts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
        console.log(payload);
      })
      .addCase(addposts.rejected, (state) => {
        state.error = true;
      });
  }
});
export default addPostSlice.reducer;
