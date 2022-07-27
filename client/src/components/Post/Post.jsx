import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPosts } from '../../store/postSlice';
import { lighten } from '../../utils/styleMethods';
import { addPosts } from '../../store/addPostSlice';

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
  h3 {
    font-size: 1.5rem;
    margin-top: 0;
  }
  p {
    color: #0000ff;
    text-decoration: underline;
  }
`;

const Post = () => {
  const postsData = useSelector((state) => state.posts.value);
  const reload = useSelector((state) => state.addposts.reload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [reload]);

  return (
    <>
      <h2>View Posts:</h2>
      {postsData.length ? (
        <section className="posts">
          {(postsData.map(({ title, text, author, date }) => (
            <CardWrapper>
              <h3>{title}</h3>
              <section>
                {text.slice(0, 500)}...
                {author}
                {date}
                <p>Read More from the post &#39;{title}&#39;...</p>
              </section>
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
