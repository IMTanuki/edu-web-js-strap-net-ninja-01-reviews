// import - modules
import React from 'react';
import { useParams } from 'react-router-dom';

// import - react hooks
import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";
import StatusMessage from "../../components/Other/StatusMessage";

// import - custom hooks
// import useFetch from '../../hooks/useFetch';

// import - components


//gql query
const getReviewSelected = gql`
query getReview($id: ID!) {
  review(id: $id) {
    data {
      id,
      attributes{
      	title, rating, body, createdAt, updatedAt, publishedAt,
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
`;

// functions
const ReviewDetails = () => {
	const { id } = useParams ();
	// const { data: review,  loading, err } = useFetch ( 'http://localhost:5000/api/reviews/' + id );
	const { data, loading, error } = useQuery ( getReviewSelected, {
		variables: {
			id: id
		}
	} );

	if (loading || error) {
		return <StatusMessage loading={loading} error={error} />;
	}

	const review = data.review.data;

	return (
		<div>
			<h2>Selected Review</h2>

			{/* selected review */}
			<ReviewCard review={ review } hasLink={ false }> </ReviewCard>

		</div>
	);
};

export default ReviewDetails;
