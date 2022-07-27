import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Gif } from '../../types';
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

const Post = () => {
  const [posts, setPosts] = useState<Gif[]>([]);

  const getPosts = async () => {
    try {
      const { data: apiResults } = await axios.get(`${urlBase}/posts`);
      setPosts(apiResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2>View Posts:</h2>
      {posts.length ? (
        <section className="posts">
          {( posts.map(({ id, title, text, category, author, date }: Gif) =>
            <CardWrapper>
              <h3>{title}</h3>
              <section>
                {text.slice(0, 500)}...
                {author}
                {date}
                <p>Read More from the post &#39;{title}&#39;...</p>
              </section>
            </CardWrapper>))}
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
