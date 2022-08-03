import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import NotFound from './pages/NotFound';
import PostDetails from './components/PostDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="postDetails/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
