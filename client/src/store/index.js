import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './addpostSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,

  },
});
