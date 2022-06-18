import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={`post_${post.id}`}>
            <Link to={`post/${post.id}`} title={post.title}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
