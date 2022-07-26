import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../db.json';

export const PostSlice = createSlice({
  name: 'post',
  initialState: {
    value: UserData
  },
  reducers: {
    addposts: (state, actions) => {

    }
  },
});

export default PostSlice.reducer;
