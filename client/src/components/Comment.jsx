import React, { useEffect, useState } from 'react';

const Comment = ({ comments }) => {
  return (
    <div> {comments && comments.map(({ data }) =>
      <h6>{data}</h6>)}
    </div>
  );
};
export default Comment;
