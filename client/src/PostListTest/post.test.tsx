import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store'
import Post from '../components/Post/Post';

test('should render section if no posts are displayed', () => {
  render(
  <Provider store={store}>
    <BrowserRouter>
      <Post />
    </BrowserRouter>
  </Provider>,);
  const legendWrapper = screen.getByTitle('section');
  expect(legendWrapper).toBeInTheDocument();
 
});


test('should render no post paragraph', () => {
render(
<Provider store={store}>
    <BrowserRouter>
    <Post />
    </BrowserRouter>
</Provider>,);

// const author = screen.getByTestId('author');
// expect(author).toBeInTheDocument();
expect(screen.getByTestId('noPost')).toBeVisible();
});

test('should section by using data-testid attribute', () => {
    render(
    <Provider store={store}>
        <BrowserRouter>
        <Post />
        </BrowserRouter>
    </Provider>,);
    const date =  screen.getByTestId('section');
    expect(date).toBeInTheDocument();
});

test('should render link to add a post', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <Post />
      </BrowserRouter>
    </Provider>,);
    const readMore = screen.getByTestId('link');
    expect(readMore).toBeInTheDocument();
});

test('should render header text', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <Post />
      </BrowserRouter>
    </Provider>,);
    
    const textAreaElement = screen.getByText('View Posts:');
    expect(textAreaElement).toBeInTheDocument();
});





