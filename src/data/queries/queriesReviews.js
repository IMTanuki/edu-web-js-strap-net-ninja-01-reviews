// import - react modules
import { gql } from "@apollo/client";

// import - react hooks

// import - custom modules

// import - custom hooks

// import - components

// functions
export const GET_REVIEWS_ALL = gql`
  query getReviewsAll {
    reviews {
      id
      title
      rating
      body
      categories {
        id
        name
      }
    }
  }
`;

export const GET_REVIEWS_SELECTED = gql`
query getReviewSelected($id: ID!) {
  review(where: { id: $id }) {
      id
      title
      rating
      body
      categories {
        id
        name
      }
    }
  }
`;
