import React from 'react';
import Post from '../components/Post/Post.tsx';
import AddPost from './AddPost';

const Posts = () => {
  return (
    <main>
      <Post />
      <h3>RECENT POSTS:</h3>
      <AddPost />
    </main>
  );
};

export default Posts;
