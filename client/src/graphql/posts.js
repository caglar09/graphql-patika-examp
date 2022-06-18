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

export { GET_POSTS };
