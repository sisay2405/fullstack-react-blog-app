import React from 'react';
import AddPost from './AddPost';

const Posts = () => {
  // const [myCar, setMyCar] = useState("Volvo");

  // const handleChange = (event) => {
  //   setMyCar(event.target.value)
  // }
  return (
    <main>
      <h3>RECENT POSTS:</h3>
      <AddPost />
    </main>
  );
};

export default Posts;
