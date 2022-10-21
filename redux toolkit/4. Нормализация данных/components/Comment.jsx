import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  const { author, comment} = useSelector((state) => {
    const currentComment = Object.values(state.commentsReducer.entities).find((user) => user.id === commentId);
    const currentAuthor = Object.values(state.usersReducer.entities).find((user) => user.id === currentComment.author);

    return { author: currentAuthor, comment: currentComment };
  })

  // END

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;
