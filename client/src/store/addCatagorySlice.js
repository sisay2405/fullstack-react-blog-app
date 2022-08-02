/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const addcatagoryconst = {
//   category: 'test',
//   id: 7
// };
const urlBase = 'http://localhost:3001';
// const newArr = [];

export const addCatagory = createAsyncThunk(
  'getCatagory',
  async ({ newCatagory }) => {
    try {
      const catagories = await axios.post('http://localhost:3001/posts', { newCatagory });
      return catagories.data;
    } catch (err) {
      console.log(`Error!:${err}`);
    }
  }
);

export const categorySlice = createSlice({
  name: 'newCatagory',
  initialState: {
    newCatagory: '',
    reload: false,
    loading: false,
    error: false,
  },

  reducers: {
    //     setAddCategory(state, { payload }) {
    //       state.value = catagory;
    //  if (payload ! = 'catagory'){

    //  }
  },

  extraReducers(builder) {
    builder
      .addCase(addCatagory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCatagory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
        console.log(payload);
      })
      .addCase(addCatagory.rejected, (state) => {
        state.error = true;
      });
  }
});

export const { setAddCategory } = categorySlice.actions;
