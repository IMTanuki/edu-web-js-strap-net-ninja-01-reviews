// import - react modules
import React from 'react';
import { useParams } from 'react-router-dom';

// import - react hooks
import { useQuery} from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";
import StatusMessage from "../../components/Other/StatusMessage";

// import - custom modules
import { GET_CATEGORIES_SELECTED } from "../../data/queries/queriesCategories";
import { checkDataComplete } from "../../data/validation/checkData";

// import - custom hooks

// import - components

// functions
const Categories = () => {
	const { id } = useParams ();
	const { data, loading, error } = useQuery ( GET_CATEGORIES_SELECTED, {
		variables: {
			id: id
		}
	} );

	// check status
	if (loading || error) return <StatusMessage loading={loading} error={error} />;
	if (!checkDataComplete(data)) return <p>Still Loading...</p>;

	const category = data.category;
	const reviews = category.reviews;

	return (
		<div>
			<h2>Category: { category.name }</h2>

			{/* all reviews with category */}
			{ 	reviews && reviews.map ( review => (
				<ReviewCard key={review.id} review={review} hasLink={true} />
			) ) }
		</div>
	);
};

export default Categories;
