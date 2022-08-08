/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Adding a category (need to add route to backend)
export const addCatagory = createAsyncThunk(
  'addCatagory',
  async (categoryType) => {
    try {
      const catagories = await axios.post('http://localhost:3001/api/addCategoryPost', { categoryType });
      return catagories.data;
    } catch (err) {
      console.log(`Error!:${err}`);
    }
  }
);

// Getting all the catagories (works)
export const getCatagory = createAsyncThunk(
  'getCatagory',
  async () => {
    try {
      const catagoriesPost = await axios.get('http://localhost:3001/api/getAllCategory');
      return catagoriesPost.data;
    } catch (err) {
      console.log(`Error!:${err}`);
    }
  }
);
export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: '',
    reload: true,
    loading: false,
    error: false,
  },

  reducers: {
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
      })
      .addCase(getCatagory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCatagory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
      })
      .addCase(getCatagory.rejected, (state) => {
        state.error = true;
      });
  }
});

export const { setAddCategory } = categorySlice.actions;

export default categorySlice.reducer;
