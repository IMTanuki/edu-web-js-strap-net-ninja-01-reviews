// import - modules
import { React } from 'react';

// import - react hooks
import { useQuery, gql } from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";


// import - custom hooks
// import useFetch from '../../hooks/useFetch';

// import - components
import StatusMessage from "../../components/Other/StatusMessage";

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

	if ( loading || error ) {
		return <StatusMessage loading={ loading } error={ error }/>;
	}

	return (
		<div>
			<h2>Home</h2>

			{/* all reviews */}
			<div>
				{ data && data.reviews.data.map ( ( review ) => {
						return (
							<ReviewCard review={ review } hasLink={ true }> </ReviewCard>
						)
					}
				) }
			</div>
		</div>
	);
};

export default Home;
