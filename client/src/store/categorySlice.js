/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const urlBase = 'http://localhost:3001';

export const getCatagory = createAsyncThunk(
  'catagory/getCatagory',
  async () => {
    const { data: apiResults } = await axios.get(`${urlBase}/catagories`);
    console.log('API RESULTS:', apiResults);
    return apiResults;
  }
);

export const categorySlice = createSlice({
  name: 'catagory',
  initialState: {
    catagory: [],
    loading: false,
    error: false,
  },
  reducers: {
    setCatagory(state, { payload }) {
      state.catagory = payload;
    },
  },
  extraReducers(builder) {
    builder
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

export const { setCatagory } = categorySlice.actions;

export default categorySlice.reducer;
