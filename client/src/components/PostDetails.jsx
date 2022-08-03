import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { getDetails, getPosts } from '../store/postSlice';
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
  const { id } = useParams();
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const post = useSelector((state) => state.posts.value);
  // const { details } = useSelector(
  //   (state) => state.details,
  //   shallowEqual
  // );
  const { title, text, category, author, date } = post;
  useEffect(() => {
    getPosts(id)
      .then(({ data: post }) => setPost(post))
      .catch((err) => console.log(err));
  }, [getPosts, id]);
  return (
    <>
      <CardWrapper>
        <fieldset>
          <legend style={{ align: 'right', color: 'blue' }}><h4>{category}</h4></legend>
          <h3>{title}</h3>
          <div>PostDetails for post id {id} {title}</div>
          <section>
            {/* {text.slice(0, 500)}... */}
            {author}
            {date}
            <p>Read More from the post &#39;{title}&#39;...</p>
          </section>
        </fieldset>
      </CardWrapper>
    </>
  );
}

export default PostDetails;
