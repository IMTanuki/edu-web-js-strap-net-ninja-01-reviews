// import - react modules
import { React } from 'react';

// import - react hooks
import { useQuery} from "@apollo/client";
import ReviewCard from "../../components/Reviews/ReviewCard";

// import - custom modules
import { GET_REVIEWS_ALL } from '../../data/queries/queriesReviews';

// import - custom hooks

// import - custom components
import StatusMessage from "../../components/Other/StatusMessage";

// functions
const Home = () => {
	// const { data, loading, err } = useFetch ( 'http://localhost:5000/api/reviews' );
	const { data, loading, error } = useQuery ( GET_REVIEWS_ALL);

	// check status
	if (loading || error) return <StatusMessage loading={loading} error={error} />;

	// deconstruct data
	const reviews = data.reviews;

	return (
		<div>
			<h2>Home</h2>

			{/* all reviews */}
			<div>
				{ reviews && reviews.map ( ( review ) => {
						return (
							<ReviewCard key={review.id}
										review={ review }
										hasLink={ true }
										bodyLength = {500}>
							</ReviewCard>
						)
					}
				) }
			</div>
		</div>
	);
};

export default Home;
