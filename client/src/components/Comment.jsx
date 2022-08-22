/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';

const Comment = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      {comments && comments.map((data) =>
        <h6>{data}</h6>
      )}
    </div>
  );
};
export default Comment;
