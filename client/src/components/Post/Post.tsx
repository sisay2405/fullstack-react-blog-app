import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CatagoryBar from '../CatagoryBar';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { getPosts } from '../../store/postSlice';
import { lighten } from '../../utils/styleMethods';
import Comment from '../Comment';

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
    background: #2dbeeb;
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

const PostWrapper = styled.div`
  display: flex;
  .posts{
    width: 75%;
  }
`;

const LegendWrapper = styled.legend`
  align: 'right'; 
  color: 'white'; 
  borderRadius: '5px';
`;
const comments = [
  {
    data: 'comment 1',
  },
  {
    data: 'comment 2',
  },
  {
    data: 'comment 3',
  },
];
const Post = () => {
  // In component files, import the pre-typed hooks instead of the standard hooks from React-Redux.
  const postsData = useAppSelector((state) => state.posts.value);
  const reload = useAppSelector((state) => state.addposts.reload);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts());
  }, [reload]);

  const handleOnClick = (id: string) => {
    navigate(`/postDetails/${id}`);
  };

  return (
    <PostWrapper>
      {postsData.length ? (
        <div className="posts">
          <h2>View Posts:</h2>
          {(postsData.map(({ _id, title, text, author, date, category, comments }) => (
            <CardWrapper key={_id} onClick={() => handleOnClick(_id)}>
              <fieldset>
                <LegendWrapper>{category}</LegendWrapper>
                <h5>{title}</h5>
                <section>
                  {text.slice(0, 500)}...
                  <h6>{author}</h6>
                  <h6>{date}</h6>
                  <h5>Read More from the post &#39;{title}&#39;...</h5>
                </section>
                <Comment comments={comments} />
              </fieldset>
            </CardWrapper>
          )))}
        </div>
      ) : (
        <div title="section" data-testid="section" className="noPosts">
          <h2 data-testid="noPost">
            There are no posts yet. You should{' '}
            <div data-testid="link">go add one!</div>{' '}
          </h2>
        </div>
      )}
      <CatagoryBar />
    </PostWrapper>
  );
};

export default Post;
