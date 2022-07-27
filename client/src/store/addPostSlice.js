/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addpost = {
  title: 'This is a test',
  text: 'Testing post request that Ermias built',
  category: 'test',
  author: 'frankie and ermias',
  date: 'today',
  id: 7
};
const urlBase = 'http://localhost:3001';
export const addPosts = createAsyncThunk(
  'add/addposts',
  async () => {
    const posts = await axios.post(`${urlBase}/posts`, addpost);
    return posts;
  }
);
export const addPostSlice = createSlice({
  name: 'addposts',
  initialState: {
    // title: '',
    // text: '',
    // category: '',
    // author: '',
    // date: '',
    reload: false,
    loading: false,
    error: false,
  },
  reducers: {
    // setTitle(state, { payload }) {
    //   state.title = payload;
    // }, setText(state, { payload }) {
    //   state.text = payload;
    // }, setCategory(state, { payload }) {
    //   state.category = payload;
    // }, setAuthor(state, { payload }) {
    //   state.author = payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(addPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
        console.log(payload);
      })
      .addCase(addPosts.rejected, (state) => {
        state.error = true;
      });
  }
});
export default addPostSlice.reducer;
