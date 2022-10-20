
import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  console.log('inside COMMENT: ', commentId);
  const comment = useSelector((state) => {
    const currentComment = state.commentsReducer.comments.filter((com) => com.id === commentId);
    return currentComment[0];
  });

  const author = useSelector((state) => {
    const currentAuthor = state.usersReducer.users.filter((user) => user.username === comment.author);
    return currentAuthor[0];
  });
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

  /* BEGIN
  // для получения данных из разных селекторов лучше всего использовать `createSelector`,
  // но для решения этого задания можно обычные селекторы
  const { author, comment } = useSelector((state) => {
    const currentComment = state.commentsReducer.comments.find(({ id }) => id === commentId);

    if (!currentComment) {
      return {};
    }
    const currentAuthor = state.usersReducer.users.find(({ id }) => id === currentComment.author);
    return { author: currentAuthor, comment: currentComment };
  });
  */