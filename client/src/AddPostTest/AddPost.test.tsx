import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store'
import AddPost from '../pages/AddPost';
import userEvent from '@testing-library/user-event';

test('should render input element', () => {
  render(
  <Provider store={store}>
    <BrowserRouter>
      <AddPost />
    </BrowserRouter>
  </Provider>,);
  const inputElement = screen.getByPlaceholderText(/post Tittle Here/i);
 expect(inputElement).toBeInTheDocument();
 
});
test('should render a button', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>
    </Provider>,);
    const buttonElement = screen.getByRole('button', {name:/Add Post/i});
     expect(buttonElement).toBeInTheDocument();
   
  });
  test('should render a text area', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>
    </Provider>,);
 
    const textAreaElement = screen.getByPlaceholderText(/post text Here/i);
    expect(textAreaElement).toBeInTheDocument();
    });
    test('should render select element', () => {
        render(
        <Provider store={store}>
          <BrowserRouter>
            <AddPost />
          </BrowserRouter>
        </Provider>,);
        const selectElement =  screen.getByTestId('select');
        expect(selectElement).toBeInTheDocument();
      });

test('should be able to type in the input feild', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>
    </Provider>,);
    const inputElement = screen.getByPlaceholderText(/post Tittle Here/i);
    userEvent.type(inputElement, "New tittle" );
    expect(inputElement).toBeInTheDocument();
  });
test('should be able to type in the text area feild', () => {
    render(
    <Provider store={store}>
      <BrowserRouter>
        <AddPost />
      </BrowserRouter>
    </Provider>,);
    
    const textAreaElement = screen.getByPlaceholderText(/post text Here/i);
    userEvent.type(textAreaElement, "somthing new" );
    expect(textAreaElement).toBeInTheDocument();
  });
  test('the Add post button should be disabled until all  input and selct fields are fulfilled', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPost />
        </BrowserRouter>
      </Provider>
    );
    const buttonElement = screen.getByRole('button', {name:/Add Post/i});
    expect(buttonElement).toBeDisabled();
  });
  test('can not Submit a form when button is disabled ', async () => {
    const onSubmit = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPost />
        </BrowserRouter>
      </Provider>
    );
    const buttonElement = screen.getByRole('button', {name:/Add Post/i});
    userEvent.click(buttonElement);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  test('Submit a form when button is clicked ', async () => {
    const onSubmit = jest.fn();
    render( <Provider store={store}>
        <BrowserRouter>
          <AddPost />
        </BrowserRouter>
      </Provider>);
   const inputElement = screen.getByPlaceholderText(/post Tittle Here/i);
   const textAreaElement = screen.getByPlaceholderText(/post text Here/i);
  const buttonElement = screen.getByRole('button', { name: /Add Post/i });
    userEvent.type(inputElement, 'Alexandria');
    userEvent.type(textAreaElement, 'new text');
    userEvent.click(buttonElement);
    expect(onSubmit).toHaveBeenCalled;
  });