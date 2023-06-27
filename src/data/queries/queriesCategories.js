// import - react modules
import { gql } from "@apollo/client";

// import - react hooks

// import - custom modules

// import - custom hooks

// import - components

// functions
export const GET_CATEGORIES_ALL = gql`
query getCategoriesAll {
  categories {
    id
    name
  }
}
`;


export const GET_CATEGORIES_SELECTED = gql`
query getCategorySelected($id: ID!) {
  category(where: { id: $id }) {
    id
    name
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
}
`;
