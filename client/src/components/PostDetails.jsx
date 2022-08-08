/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deltePost, UpdatePosted } from '../store/addPostSlice';
import { lighten } from '../utils/styleMethods';

const CardWrapper = styled.article`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1.5rem;
  white-space: pre-line;
  &:hover {
    ${lighten('#009900', 0.8)}
    cursor: pointer;
    p {
      color: #000099;
    }
  }
  legend {  
    background: #7FFF00;
    margin-left: calc(80% - 35px - 8px);  
   text-transform: capitalize;  
     }  
  h3 {
    font-size: 1.5rem;
    margin-top: 0;
  }
  p {
    color: #0000ff;
    text-decoration: underline;
  }
`;
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
const Catagorywrapperr = styled.footer`
  color: #fefefe;
  padding: 1rem 0;
  margin-right: 100px;
  text-align: center;
  .CatagoryInput{
    width: 100px;
  }
  button {
    margin: 0.25rem 0;
    width: 100%;
  }
  h3{
    color:black;
  }
`;
function PostDetails() {
  const [title, setTittle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.posts.value);
  const catgoryData = useSelector((state) => state.categories.value);
  const selectedPost = [...postDetails].filter((post) => {
    return post._id === id;
  });
  const DeletePost = () => {
    dispatch(deltePost(id));
    navigate('/');
  };
  useEffect(() => {
    setTittle(selectedPost[0].title);
    setText(selectedPost[0].text);
    setCategory(selectedPost[0].category);
  }, []);
  const UpdatePost = (e) => {
    e.preventDefault();
    dispatch(UpdatePosted({ id, title, text, category }));
    navigate('/');
  };
  const handletitleChange = (event) => {
    setTittle(event.target.value);
  };
  const handletextChange = (event) => {
    setText(event.target.value);
  };
  const handlecategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      { selectedPost && (
      <CardWrapper key={selectedPost[0]._id}>
        <fieldset>
          <FormWrapper onSubmit={UpdatePost}>
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
              <button type="button" onClick={DeletePost}>Delete post</button>
              <button type="submit">Update post</button>
            </div>
          </FormWrapper>
        </fieldset>
      </CardWrapper>
      )}
    </>
  );
}

export default PostDetails;
