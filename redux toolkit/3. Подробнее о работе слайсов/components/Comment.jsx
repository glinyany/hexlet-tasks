  // BEGIN
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
  // END