import React from "react";

function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={`post_${post.id}`}>
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
