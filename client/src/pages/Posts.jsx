import React from 'react';
// eslint-disable-next-line import/extensions
import Post from '../components/Post/Post';
import AddPost from './AddPost';

const Posts = () => {
  return (
    <main>
      <Post />
      <h3>RECENT POSTS:</h3>
      {/* <AddPost /> */}
    </main>
  );
};

export default Posts;
