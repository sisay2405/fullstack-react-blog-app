/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* global CategoryState, value, loading, error, reload */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryResult } from '../types/types';

interface CategoryState {
  value:CategoryResult[];
  loading:boolean;
  error:boolean;
  reload:boolean;
}

const initialState: CategoryState = {
  value: [],
  reload: true,
  loading: false,
  error: false,
};

// Adding a category (need to add route to backend)
export const addCatagory = createAsyncThunk(
  'addCatagory',
  async (categoryType:string) => {
    const jwt = localStorage.getItem('jwtKey'); 
    try {
      const catagories = await axios.post('http://localhost:3001/api/addCategoryPost', 
        { categoryType },
        { 
          headers: {Authorization: `Bearer ${jwt}`}
        }
      );
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
  initialState,

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
      .addCase(getCatagory.fulfilled, (state, action:PayloadAction<CategoryResult[]>) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getCatagory.rejected, (state) => {
        state.error = true;
      });
  }
});

// export const { setAddCategory } = categorySlice.actions;

export default categorySlice.reducer;
