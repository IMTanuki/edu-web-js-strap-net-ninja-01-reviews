// import - modules
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// import - react hooks
import { useQuery, gql } from "@apollo/client";

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

	if ( loading ) return <p>Loading...</p>
	if ( error ) return <p>Error - { error.message }</p>

	const category = data.category.data;
	console.log ( category.attributes.reviews.data );
	console.log ( 'test' );


	return (
		<div>
			<h2>Categories</h2>
			<h3>{ category.attributes.name }</h3>

			{ category.attributes.reviews.data.map ( review => (
				<div key={ review.id } className="review-card">
					<div className="rating">{ review.attributes.rating }</div>
					<h3>{ review.attributes.title }</h3>

					{/*  category list */}
					{review.attributes.categories.data.map ( category => (
						<small key= {category.id} >{category.attributes.name}</small>
						)
					)}


					<ReactMarkdown>{review.attributes.body.substr(0, 500)}</ReactMarkdown>
					<Link to={`/review-details/${review.id}` }>Read More...</Link>

				</div>
			) ) }
		</div>
	);
};

export default Categories;
