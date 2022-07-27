import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios  from 'axios';
const addpost= {title:"ermias",text:"new",category:"cars",author:"frankie",date:"today",id:2}
const urlBase = 'http://localhost:3001';
export const addposts = createAsyncThunk(
  'add/addposts',
  async () => {
    const posts = await axios.post(`${urlBase}/posts`,addpost)
    return posts
  }
);
export const addPostSlice = createSlice({
  name: 'addposts',
  initialState:{
    title: '', 
    text: '',
    category:'',
    author: '',
    date:'',
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
      .addCase(addposts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addposts.fulfilled, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
      .addCase(addposts.rejected, (state) => {
        state.error = true;
      });
  }
});
export default addPostSlice.reducer;
