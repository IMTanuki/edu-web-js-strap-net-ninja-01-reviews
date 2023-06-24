// import - modules
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// import - react hooks

// import - custom hooks
import useFetch from '../../hooks/useFetch';

// import - components

// functions
const ReviewDetails = () => {
	const {id} = useParams();
	const { data: review,  loading, err } = useFetch ( 'http://localhost:5000/api/reviews/' + id );

	if ( loading ) return <p>Loading...</p>
	if ( err ) return <p>Error...:>((</p>

	return (
		<div>
			<h2>REVIEW DETAILS</h2>

			<div className="review-card">
				<div className="rating">{ review.data.attributes.rating }</div>
				<h2 >{ review.data.attributes.title }</h2>
				<small> console list</small>
				<p >{ review.data.attributes.body}</p>
				<br></br>

			</div>
		</div>
	);
};

export default ReviewDetails;
