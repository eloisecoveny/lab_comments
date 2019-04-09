import React from 'react';
import Comment from './Comment';

const CommentsList = ({data}) => {

  const commentNodes = data.map(comment => {
    return (
      <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
    )
  })
  return (
    <div className="comments-list">
      {commentNodes}
    </div>
  )
}

export default CommentsList;
