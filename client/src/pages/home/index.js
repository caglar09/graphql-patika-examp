import React from "react";
import { Spinner } from "reactstrap";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "graphql-queries";
import { PostList } from "components";

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
