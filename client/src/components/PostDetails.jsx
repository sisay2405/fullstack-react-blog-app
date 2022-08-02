import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>PostDetails for post id {id}.</div>
  );
}

export default PostDetails;
