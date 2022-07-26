import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const FormWrapper = styled.form`
  label {
    display: block;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }
  input {
    margin-bottom: 2rem;
  }
  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
  }

  button {
    margin-left: 0;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

const AddPost = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.addPost.value);
  return (
    <main>
      <h3>Add Post:</h3>
      <FormWrapper>
        <div>
          <input type="text" placeholder="post Tittle Here" />
          <textarea type="text" placeholder="post text Here" />
          <input type="text" placeholder="Select catagory" />
          <button type="submit">Add post</button>
        </div>

      </FormWrapper>
    </main>
  );
};

export default AddPost;
