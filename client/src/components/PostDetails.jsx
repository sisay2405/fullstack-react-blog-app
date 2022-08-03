import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deltePost } from '../store/addPostSlice';
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
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.posts.value);
  const selectedPost = [...postDetails].filter((post) => {
    return post.id === +id;
  });
  const DeletePost = () => {
    dispatch(deltePost(id));
    navigate('/');
  };

  return (
    <>
      { selectedPost && (
      <CardWrapper key={selectedPost[0].id}>
        <fieldset>
          <legend style={{ align: 'right', color: 'blue' }}><h4>{selectedPost[0].category}</h4></legend>
          <h3>{selectedPost[0].title}</h3>
          <section>
            {selectedPost[0].text}
            {selectedPost[0].author}
            {selectedPost[0].date}
            <p>Read More from the post &#39;{selectedPost[0].title}&#39;...</p>
          </section>
          <button type="button" onClick={DeletePost}>Delete post</button>
        </fieldset>
      </CardWrapper>
      )}
    </>
  );
}

export default PostDetails;
