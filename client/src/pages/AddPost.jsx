import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addposts } from '../store/addPostSlice';

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
  .addCatagory {
    width:100%;
    padding:7px;
    margin-top:20px;
  }
  .textareaInput {
    height:250px;
  }

  button {
    margin-left: 0;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

const AddPost = () => {
  const [title, setTittle] = useState('');
  const [text, setText] = useState('');
  const [catagory, setCatagory] = useState('');
  const catgoryData = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addposts({ title, text, catagory }));
    navigate('/');
  };
  const handletitleChange = (event) => {
    setTittle(event.target.value);
  };
  const handletextChange = (event) => {
    setText(event.target.value);
  };
  const handlecatagoryChange = (event) => {
    setCatagory(event.target.value);
  };

  return (
    <main>
      <h3>Add Post:</h3>
      <FormWrapper onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={handletitleChange}
            placeholder="post Tittle Here"
          />
          <textarea
            className="textareaInput"
            cols="80"
            row="8"
            type="text"
            onChange={handletextChange}
            value={text}
            placeholder="post text Here"
          />
          <div>
            <select
              value={catagory}
              onChange={handlecatagoryChange}
              className="addCatagory"
            >
              <option>Select Catagory</option>
              {catgoryData && catgoryData.map((item) => {
                return <option key={item.id}> {item.categoryType}</option>;
              })}
            </select>
          </div>
          <button type="submit">Add post</button>
        </div>
      </FormWrapper>
    </main>
  );
};

export default AddPost;
