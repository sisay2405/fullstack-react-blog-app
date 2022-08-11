/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CatagoryBar from '../components/CatagoryBar';
import { store } from '../store';

test('render "VIEW CATAGORY POSTS" as a text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const viewCategoryElement = screen.getByText('VIEW CATAGORY POSTS');
  expect(viewCategoryElement).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const buttonElement = screen.getByTestId('custom-element');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
});
test('Catagory Name', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const placeHolder = screen.getByPlaceholderText(/Category Name/i);
  expect(placeHolder).toBeInTheDocument();
});
test('render select elemnt ', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const selectedElement = screen.getByTestId('selected-element');
  expect(selectedElement).toBeInTheDocument();
});
test('should be able to type in input field', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Category Name/i);
  userEvent.type(inputElement, 'somthing new');
  expect(inputElement).toBeInTheDocument();
});
test('the "ADD CATAGORY" button should be disabled until input is filled', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const sumButton = screen.getByRole('button', {
    name: /ADD CATAGORY/i,
  });
  expect(sumButton).toBeDisabled();
});
test('can not Submit a form when button is disabled ', async () => {
  const onSubmit = jest.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const sumButton = screen.getByRole('button', {
    name: /ADD CATAGORY/i,
  });
  userEvent.click(sumButton);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
test('Submit a form when button is clicked ', async () => {
  const onSubmit = jest.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CatagoryBar />
      </BrowserRouter>
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Category Name/i);
  const buttonElement = screen.getByTestId('custom-button');
  userEvent.type(inputElement, 'category');
  userEvent.click(buttonElement);
  expect(onSubmit).toHaveBeenCalledTimes;
});
