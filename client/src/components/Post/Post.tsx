import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { lighten } from '../../utils/styleMethods';
import { Gif } from '../../types';

const ArticleWrapper = styled.article`
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

const urlBase = 'http://localhost:3001';

const getPosts = () => {
  return axios.get(`${urlBase}/posts`);
};

const Post = () => {
  const [posts, setPosts] = useState<Gif[]>([]);

  useEffect(() => {
    getPosts()
      .then(({ data: posts }) => setPosts(posts.reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>View Posts:</h2>
      {posts ? (
        <section className="posts">
          {posts.map((post) => (
            <Post
              post={post}
            />
          ))}
        </section>
      ) : (
        <section className="noPosts">
          <h2>
            There are no posts yet. You should{' '}
            <div>go add one!</div>{' '}
          </h2>
        </section>
      )}
      hello
    </>
  );
};

export default Post;
