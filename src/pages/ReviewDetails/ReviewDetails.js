// import - modules
import React from 'react';
import {useParams } from 'react-router-dom';

// import - react hooks
import { useQuery, gql } from "@apollo/client";

// import - custom hooks
// import useFetch from '../../hooks/useFetch';

// import - components

// gql query
//gql query
const getReviewSelected = gql`
query getReview($id: ID!) {
  review(id: $id) {
    data {
      id,
      attributes{
      	title, rating, body, createdAt, updatedAt, publishedAt
      }
    }
  }
}
`;

// functions
const ReviewDetails = () => {
	const {id} = useParams();
	// const { data: review,  loading, err } = useFetch ( 'http://localhost:5000/api/reviews/' + id );
	const { data, loading, error } = useQuery ( getReviewSelected, {
		variables: {
			id: id
		}
	} );

	if ( loading ) return <p>Loading...</p>
	if ( error ) return <p>Error - {error.message}</p>
	const review = data.review.data;
	return (
		<div>
			<h2>REVIEW DETAILS</h2>

			<div className="review-card">
				<div className="rating">{ review.attributes.rating }</div>
				<h2 >{ review.attributes.title }</h2>
				<small> console list</small>
				<p >{review.attributes.body}</p>
				<br></br>

			</div>
		</div>
	);
};

export default ReviewDetails;
