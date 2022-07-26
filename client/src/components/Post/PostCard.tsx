import React from 'react'

type postProps = {
    id: number;
    title: string;
    text: string;
    category: string;
    author?: string;
    date?: string;
  }

function PostCard({id, title, text, category, author, date}: postProps) {
  return (
    <div>PostCard</div>
  )
}

export default PostCard