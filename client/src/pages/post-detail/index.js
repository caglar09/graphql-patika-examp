import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";

import { GET_POST } from "graphql-queries";
import { Spinner } from "components";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function PostDetail() {
  const params = useParams();
  const { id } = params;
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { post_id: Number(id) },
  });

  const isContentReady = !loading && !error;

  const { post } = data ?? { post: {} };

  return (
    <div>
      {loading && <Spinner />}

      {!loading && error && <h2>{error.message}</h2>}

      {isContentReady && (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>

            <CardText>{post?.description}</CardText>
            <Button>{post?.user?.full_name}</Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default PostDetail;
