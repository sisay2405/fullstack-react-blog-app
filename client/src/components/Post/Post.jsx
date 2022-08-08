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
    background: white;
  }
  legend {  
    background: #009900;
    padding: 10px;  
    margin-left: calc(80% - 3px - 8px);  
   text-transform: capitalize;  
   font-style: italic;
     }  
  h5 {
    font-size: 1.25rem;
    margin-top: 0;
    color:#2dbeeb;
  }
  p {
    color: #0000ff;
    text-decoration: underline;
  }
`;
// const Catagorywrapperr = styled.footer`
//   color: #fefefe;
//   padding: 1rem 0;
//   margin-right: 100px;
//   text-align: center;
//   .CatagoryInput{
//     width: 100px;
//   }
//   button {
//     margin: 0.25rem 0;
//     width: 100%;
//   }
//   h3{
//     color:black;
//   }
// `;
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
                <legend style={{ align: 'right', color: 'white', borderRadius: '5px' }}>{category}</legend>
                <h5>{title}</h5>
                <section>
                  {text.slice(0, 500)}...
                  <h6>{author}</h6>
                  <h6>{date}</h6>
                  <h5>Read More from the post &#39;{title}&#39;...</h5>
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
