import React from 'react';
import styled from 'styled-components';
import { lighten } from '../utils/styleMethods';

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

const Post = () => {
  return (
    <ArticleWrapper>
      <section>
        <p>POSTS</p>
      </section>
    </ArticleWrapper>
  );
};

export default Post;
