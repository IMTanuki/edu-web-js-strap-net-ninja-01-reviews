// import - react modules
import React from 'react';
import { useParams } from 'react-router-dom';

// import - react hooks
import { useQuery } from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";
import StatusMessage from "../../components/Other/StatusMessage";

// import - custom modules
import { GET_REVIEWS_SELECTED } from "../../data/queries/queriesReviews";

// import - custom hooks

// import - components

// functions
const ReviewDetails = () => {
	const { id } = useParams ();
	const { data, loading, error } = useQuery ( GET_REVIEWS_SELECTED, {
		variables: {
			id:id
		}
	} );

	// check status
	if (loading || error) return <StatusMessage loading={loading} error={error} />;

	// deconstruct data
	const review = data.review;

	return (
		<div>
			<h2>Selected Review</h2>

			{/* selected review */}
			<ReviewCard review={ review } hasLink={ false }> </ReviewCard>

		</div>
	);
};

export default ReviewDetails;
