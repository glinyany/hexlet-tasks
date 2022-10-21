import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  const posts = useSelector((state) => {
    // BEGIN (write your solution here)
    return Object.values(state.postsReducer.entities);
    // END
  });

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
