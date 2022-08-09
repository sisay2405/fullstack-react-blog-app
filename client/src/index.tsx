/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import {store} from './store';

export type APIResult = {
  text: string;
  title: string;
  category: string;
  id: number;
}
const root = createRoot(
<<<<<<< HEAD
  document.getElementById('root') as  HTMLElement
=======
  (document.getElementById('root') as HTMLElement)
>>>>>>> main
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
