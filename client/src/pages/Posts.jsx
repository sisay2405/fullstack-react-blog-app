import React from 'react';
import Post from '../components/Post/Post.tsx';
import AddPost from './AddPost';

const Posts = () => {
  // const [myCar, setMyCar] = useState("Volvo");

  // const handleChange = (event) => {
  //   setMyCar(event.target.value)
  // }
  return (
    <main>
      <Post />
      <h3>RECENT POSTS:</h3>
      <AddPost />
    </main>
  );
};

export default Posts;
