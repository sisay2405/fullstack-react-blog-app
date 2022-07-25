import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { lighten } from '../utils/styleMethods';
import axios from 'axios'; 

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

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(({ data: posts }) => setPosts(posts.reverse()))
      .catch((err) => console.log(err));
  }, []);

  const getPosts = () => {
    return axios.get(`${urlBase}/posts`);
  };

  return (
    <main>
      <h2>View Posts:</h2>
      {posts ? (
        <section className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <section className="noPosts">
          <h2>
            There are no posts yet. You should{' '}
            <div to="/add">go add one!</div>{' '}
          </h2>
        </section>
      )}
    </main>
  );
};

export default Post;
