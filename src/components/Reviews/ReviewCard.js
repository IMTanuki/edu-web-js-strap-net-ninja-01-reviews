// import - modules
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";

// import - react hooks

// import - custom hooks

// import - components

const ReviewCard = ( props ) => {
	// deconstruct props
	const review = props.review;
	const hasLink = props.hasLink;
	const bodyLength = props.bodyLength;

	return (
		<div className="review-card">
			<div className="rating">{ review.rating }</div>
			<h3>{ review.title }</h3>

			{/*  all categories within the review */ }
			{ review.categories.map ( category => (
					<small key={ category.id }>{ category.name }</small>
				)
			) }

			{
				bodyLength === 99999
					? <ReactMarkdown>{ review.body }</ReactMarkdown>
					: <ReactMarkdown>{ review.body.substr ( 0, bodyLength ) + '...(click Read More)' }</ReactMarkdown>
			}


			<br></br>

			{ hasLink && <Link to={ `/review-details/${ review.id }` }>Read More</Link> }

		</div>
	);
};

export default ReviewCard;



