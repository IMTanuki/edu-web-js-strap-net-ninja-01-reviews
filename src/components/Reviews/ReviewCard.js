// import - modules
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";

// import - react hooks

// import - custom hooks

// import - components

const  ReviewCard = (props) => {
	const review = props.review;
	const hasLink = props.hasLink;

  return (

	  <div className="review-card">
		  <div className="rating">{ review.attributes.rating }</div>
		  <h3 >{ review.attributes.title }</h3>

		  {/*  category list */}
		  {review.attributes.categories.data.map ( category => (
				  <small key= {category.id} >{category.attributes.name}</small>
			  )
		  )}

		  <ReactMarkdown>{review.attributes.body}</ReactMarkdown>
		  <br></br>

		  {hasLink && <Link to={`/review-details/${review.id}`}>Read More</Link>}

	  </div>
  );
};

export default ReviewCard;



