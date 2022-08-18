import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginResult } from '../types/types';
import axios from 'axios';

interface userState{
  reload:boolean;
  loading:boolean;
  error:boolean;
  value: loginResult,
}

const initialState: userState = {
  value: {},
  reload: false,
  loading: false,
  error: false
};

type userProps = {
  username: string;
  password: string;
  email: string;
};

export const userRegister = createAsyncThunk(
  'userRegister',
  async ({ username, email, password }:userProps) => {
    try {
      const posts = await axios.post('http://localhost:3001/register', {
        username,
        email,
        password,
      });
      return posts.data;
    } catch (err) {
      console.log(`Erorr!:${err}`);
    }
  }
);
export const userLogin = createAsyncThunk(
  'userLogin',
  async ({password, email, username }:userProps) => { 
    try {
      const loginPost = await axios.post('http://localhost:3001/login', {
        password,
        email
      });
      return loginPost.data;
    } catch (err) {
      console.log(`Error!:${err}`);
    }
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLogOut(state) {
      state.value = {};
      localStorage.removeItem('jwtKey');
    }
  },
  extraReducers(builder) {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
        state.value = payload.result;
        localStorage.setItem('jwtKey', payload.token );
        console.log(payload);
      })
      .addCase(userRegister.rejected, (state) => {
        state.error = true;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reload = !state.reload;
        state.value = payload.result;
        localStorage.setItem('jwtKey', payload.token );
        console.log(payload);
      })
      .addCase(userLogin.rejected, (state) => {
        state.error = true;
      })
  }
});

export const { setLogOut } = userSlice.actions;

export default userSlice.reducer;