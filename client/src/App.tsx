import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import NotFound from './pages/NotFound';
import PostDetails from './components/PostDetails';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="postDetails/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
