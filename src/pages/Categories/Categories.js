// import - modules
import React from 'react';
import { useParams } from 'react-router-dom';

// import - react hooks
import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";
import StatusMessage from "../../components/Other/StatusMessage";

// import - custom hooks

// import - components

//gql
const getCategorySelected = gql`
query getCategory($id: ID!) {
  category(id: $id) {
    data {
      id,
      attributes{
        name,
        reviews {
          data{
          id,
            attributes {
              title, rating, body,
              categories {
                data {
                id,
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;


// functions
const Categories = () => {
	const { id } = useParams ();
	const { data, loading, error } = useQuery ( getCategorySelected, {
		variables: {
			id: id
		}
	} );

	if (loading || error) {
		return <StatusMessage loading={loading} error={error} />;
	}

	const category = data.category.data;

	return (
		<div>
			<h3>{ category.attributes.name }</h3>

			{/* all reviews for selected category */}
			{ category.attributes.reviews.data.map ( review => (
				<ReviewCard review={ review } hasLink={ true }> </ReviewCard>
			) ) }
		</div>
	);
};

export default Categories;
