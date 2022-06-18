import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      title
      user_id
      user {
        id
        full_name
        age
      }
      comments {
        id
        user_id
        post_id
        text
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($post_id: ID!) {
    post (id: $post_id) {
      id
      title
      user_id
      user {
        id
        full_name
        age
      }
      comments {
        id
        user_id
        post_id
        text
      }
    }
  }

  # query getPost {
  #   post(id: 2) {
  #     id
  #     title
  #     user_id
  #     user {
  #       id
  #       full_name
  #       age
  #     }
  #     comments {
  #       id
  #       text
  #       post_id
  #       user_id
  #     }
  #   }
  # }
`;

export { GET_POSTS, GET_POST };
