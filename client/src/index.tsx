/* eslint-disable import/extensions */
/* global CategoryState, value, loading, error, reload */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import { store } from './store';

const root = createRoot(
  (document.getElementById('root') as HTMLElement)
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
