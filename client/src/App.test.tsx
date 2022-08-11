import React, {PropsWithChildren} from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getDetails } from './store/postSlice';
const axios = require('axios');
// imports needed for testing 
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { AppStore, RootState, setupStore } from './store'
// As a basic setup, import your same slice reducers
import { PostsState } from './store/postSlice';

// describe('fetch post data', () => {
//   describe('when axios request is successful', () => {
//     it('should return post info', async () => {
//       // given
//       const id = '62ec3a27a76ab8d1de451a56';
//       const preResult = {};

//       // when
//       const result = await getDetails(id);
//       console.log(result);

//       // then
//       //expect(axios.get).toHaveBeenCalledWith(`http://localhost:3001/api/${id}`);
//       // expect(result).toEqual(dayWeatherDB);
//     });
//   });
// });

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

