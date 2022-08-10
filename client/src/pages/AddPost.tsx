/* eslint no-underscore-dangle: 0 */
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../types/hooks';
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
  const [category, setCategory] = useState('');
  // *********************************/
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catgoryData = useAppSelector((state) => state.categories.value);

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch<any>(addposts({ title, text, category }));
    navigate('/');
  };
  const handletitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTittle(e.target.value);
  };
  const handletextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handlecategoryChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
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
            // type="text"
            onChange={handletextChange}
            value={text}
            placeholder="post text Here"
          />
          <div>
            <select
              value={category}
              onChange={handlecategoryChange}
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
