import React from "react";
import { Spinner } from "reactstrap";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../../graphql/posts";
import PostList from "../../components/post-list";

function Home() {
  const { loading, data, error } = useQuery(GET_POSTS);

  return (
    <div>
      {loading && <Spinner>Loading...</Spinner>}

      {!loading && !error && <PostList posts={data.posts} />}
    </div>
  );
}

export default Home;
