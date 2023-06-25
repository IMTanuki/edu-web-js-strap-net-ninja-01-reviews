// import - modules
import { React } from 'react';
import { Link } from 'react-router-dom';

// import - react hooks
import { useQuery, gql } from "@apollo/client";

// import - custom hooks
// import useFetch from '../../hooks/useFetch';

// import - components

//gql query
const getReviewsAll = gql`
query {
  reviews {
    data {
      id,
      attributes{
      	title, rating, body, createdAt, updatedAt,  publishedAt,
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
`

// functions
const Home = () => {
	// const { data, loading, err } = useFetch ( 'http://localhost:5000/api/reviews' );
	const { data, loading, error } = useQuery ( getReviewsAll );

	if ( loading ) return <p>Loading...</p>
	if ( error ) return <p>{ error.message }</p>

	return (

		<div>
			<h2>Home</h2>
			<div>
				{ data && data.reviews.data.map ( ( review ) => {
						return (
							<div key={ review.id } className="review-card">

								<div className="rating">{ review.attributes.rating }</div>
								<h2>{ review.attributes.title }</h2>

								{/*  category list */}
								{review.attributes.categories.data.map ( category => (
										<small key= {category.id} >{category.attributes.name}</small>
									)
								)}


								<p>{ review.attributes.body.substr ( 0, 500 ) }...</p>
								<br></br>
								<Link to={ `/review-details/${ review.id }` }>Read More...</Link>
							</div>
						)
					}
				) }
			</div>
		</div>
	);
};

export default Home;
