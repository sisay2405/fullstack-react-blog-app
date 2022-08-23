/* eslint-disable no-param-reassign */
/* global addPostState, reload, loading, error, CategoryProps, text, title, category, id */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface addPostState {
  reload: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: addPostState = {
  reload: false,
  loading: false,
  error: false
};

type CategoryProps = {
  text: string;
  title: string;
  category: string;
  id?: string;
};

export const addposts = createAsyncThunk(
  'addposts',
  async ({ title, text, category }: CategoryProps) => {
    const jwt = localStorage.getItem('jwtKey');
    try {
      const posts = await axios.post(
        'http://localhost:3001/api/addPost',
        {
          title,
          text,
          category,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` }
        }
      );
      return posts.data;
    } catch (err) {
      console.log(`Erorr!:${err}`);
    }
  }
);

// delete post
export const deltePost = createAsyncThunk(
  'deltePost',
  async (id: string) => {
    const jwt = localStorage.getItem('jwtKey');
    console.log('name', id);
    try {
      const posts = await axios.delete(`http://localhost:3001/api/deleteId/${id}`, { headers: { Authorization: `Bearer ${jwt}` } });
      return posts.data;
    } catch (err) {
      console.log(`Erorr!:${err}`);
    }
  }
);

// update post (works)
export const UpdatePosted = createAsyncThunk(
  'UpdatePosted',
  async ({ id, title, text, category }: CategoryProps) => {
    const jwt = localStorage.getItem('jwtKey');
    try {
      const posts = await axios.patch(
        `http://localhost:3001/api/updatePost/${id}`,
        {
          title, text, category
        },
        {
          headers: { Authorization: `Bearer ${jwt}` }
        }
      );
      return posts.data;
    } catch (err) {
      console.log(`Erorr!:${err}`);
    }
  }
);

export const addPostSlice = createSlice({
  name: 'addposts',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(addposts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addposts.fulfilled, (state) => {
        state.loading = false;
        state.reload = !state.reload;
      })
      .addCase(addposts.rejected, (state) => {
        state.error = true;
      })
      .addCase(deltePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deltePost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
      })
      .addCase(deltePost.rejected, (state) => {
        state.error = true;
      })
      .addCase(UpdatePosted.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdatePosted.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
      })
      .addCase(UpdatePosted.rejected, (state) => {
        state.error = true;
      });
  }
});
export default addPostSlice.reducer;
