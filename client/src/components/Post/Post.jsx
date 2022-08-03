import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../store/postSlice';
import { lighten } from '../../utils/styleMethods';

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
  fieldset {  
    // border: thin solid white;  
    // margin: 0 auto;  
    // padding: 2em;  
    // width: 75%;  
  }
  legend {  
    background: #7FFF00;
    // padding: 2px;  
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
const Post = () => {
  const postsData = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const handleOnClick = (id) => {
    navigate(`/postDetails/${id}`);
  };
  return (
    <>
      <h2>View Posts:</h2>
      {postsData.length ? (
        <section className="posts">
          {(postsData.map(({ id, title, text, author, date, category }) => (
            <CardWrapper key={id} onClick={() => handleOnClick(id)}>
              <fieldset>
                <legend style={{ align: 'right', color: 'blue' }}><h4>{category}</h4></legend>
                <h3>{title}</h3>
                <section>
                  {text.slice(0, 500)}...
                  {author}
                  {date}
                  <p>Read More from the post &#39;{title}&#39;...</p>
                </section>
              </fieldset>
            </CardWrapper>
          )))}
        </section>
      ) : (
        <section className="noPosts">
          <h2>
            There are no posts yet. You should{' '}
            <div>go add one!</div>{' '}
          </h2>
        </section>
      )}
    </>
  );
};

export default Post;
